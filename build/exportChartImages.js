const exporter = require("highcharts-export-server");
const fs = require("fs");
const path = require("path");

// Serializes a Highcharts config object (containing JS functions) to a string
// that can be reconstructed with new Function('return ' + str)().
//
// Why not JSON.stringify + EXP_FUN markers (like the export server's X()):
//   JSON.stringify escapes " to \" inside string values. Once the outer JSON
//   quotes are removed, those \" sequences become invalid JS syntax.
//   e.g.  function(){ return "hi"; }  →  function(){ return \"hi\"; }  ← broken
//
// Fix: custom recursive serializer that writes function bodies as raw source
// (no JSON escaping), and uses JSON.stringify only for actual string data.
function serializeWithFunctions(val) {
  if (val === null) return "null";
  if (val === undefined) return "undefined";
  if (typeof val === "function") {
    return val
      .toString()
      .replace(/\/\/([^\n\r]*)/g, "/* $1 */") // // comment → /* comment */
      .replace(/[\n\t\r]/g, " "); // strip newlines (De() strips them too)
  }
  if (typeof val === "boolean" || typeof val === "number") return String(val);
  if (typeof val === "string") return JSON.stringify(val);
  if (Array.isArray(val)) {
    return "[" + val.map(serializeWithFunctions).join(",") + "]";
  }
  if (typeof val === "object") {
    const pairs = Object.keys(val).map(
      (k) => JSON.stringify(k) + ":" + serializeWithFunctions(val[k])
    );
    return "{" + pairs.join(",") + "}";
  }
  return JSON.stringify(val);
}

var chartDetails = [];

go();

async function go() {
  var views = ["portal"];
  views.forEach(function (view) {
    console.log("Creating array entries for indikatorensetView=" + view);
    var files = JSON.parse(fs.readFileSync("tmp/chartsToBuild.json"));
    files.forEach(function (chartId) {
      var pathArray = createPathArray(chartId, view);
      if (pathArray) {
        chartDetails.push(pathArray);
      }
    });
  });

  const initOptions = {
    pool: {
      minWorkers: 1,
      maxWorkers: 1,
      workLimit: 10,
    },
    logging: { level: 0 },
    customLogic: {
      allowCodeExecution: true,
      allowFileResources: true,
    },
    other: {
      listenToProcessExits: false,
    },
    highcharts: {
      version: "latest",
      cdnURL: "https://code.highcharts.com/",
      useNpm: true,
      coreScripts: ["highcharts", "highcharts-more", "highcharts-3d"],
      moduleScripts: ["stock", "map"],
      indicatorScripts: [],
      customScripts: [],
      forceFetch: false,
      cachePath: ".cache",
    },
    server: {
      proxy: {},
    },
    puppeteer: {
      args: [],
      tempDir: "./tmp/",
    },
  };

  exporter.setOptions(initOptions);
  await exporter.initExport(initOptions);

  await createSvgImages(chartDetails);
}

function createPathArray(chartId, view) {
  var imagePath = "images/" + view + "/";
  var configPath = "charts/configs/" + view + "/";
  var singlePath = "metadata/single/";
  var infilePath = path.join(__dirname, "../" + configPath + chartId + ".json");
  var additionalConfigPath = path.join(
    __dirname,
    "../" + singlePath + chartId + ".json"
  );
  var outfilePath = path.join(__dirname, "../" + imagePath + chartId + ".svg");

  try {
    var additionalConfigFile = fs.readFileSync(additionalConfigPath, "utf8");
    var additionalConfig = deserialize(additionalConfigFile);
    if (!additionalConfig.kennzahlenset.toLowerCase().includes("print")) {
      var configFile = fs.readFileSync(infilePath, "utf8");
      var config = deserialize(configFile);

      // v5 uses lowercase camelCase constructors
      var constr = config.isStock
        ? "stockChart"
        : config.chart.type === "map"
        ? "mapChart"
        : "chart";
      return {
        config: config,
        additionalConfig: additionalConfig,
        outfilePath: outfilePath,
        constr: constr,
      };
    } else {
      console.log(
        "File for Chart-Id " + chartId + " not created (is Print-Indikator) "
      );
      return null;
    }
  } catch (err) {
    console.log("Exception when reading json file " + infilePath + ": " + err);
  }
}

async function createSvgImages(chartDetails) {
  if (chartDetails.length > 0) {
    var chartEntry = chartDetails.pop();

    if (
      !chartEntry.additionalConfig.kennzahlenset.toLowerCase().includes("print")
    ) {
      var exportSettings = {
        export: {
          type: "svg",
          instr: serializeWithFunctions(chartEntry.config),
          constr: chartEntry.constr,
        },
        customLogic: {
          allowCodeExecution: true,
          customCode: `
          (function () {
              // Fix für mappie Charts
              Highcharts.seriesType('mappie', 'pie', {}, {});

              // Credits entfernen
              Highcharts.addEvent(Highcharts.Chart, 'load', function () {
                  if (this.credits && this.credits.element) {
                      this.credits.element.remove();
                  }
              });

              // Control-Points entfernen
              Highcharts.addEvent(Highcharts.Chart, 'load', function () {
                  const cp = this.container.querySelector('.highcharts-control-points');
                  if (cp) cp.remove();
              });

              // Titel & Untertitel entfernen
              Highcharts.addEvent(Highcharts.Chart, 'load', function () {
                  const title = this.container.querySelector('.highcharts-title');
                  if (title) title.remove();

                  const subtitle = this.container.querySelector('.highcharts-subtitle');
                  if (subtitle) subtitle.remove();
              });
          })()
          `,
          resources: {
            files: [
              "node_modules/proj4/dist/proj4.js",
              "node_modules/jquery/dist/jquery.min.js",
              "assets/js/customFunctions.js",
            ],
          },
        },
      };

      await exporter.startExport(exportSettings, async (error, info) => {
        if (error) {
          throw error;
        }
        fs.writeFileSync(chartEntry.outfilePath, info.result);
        console.log(
          "File created: " +
            chartEntry.outfilePath +
            ", " +
            chartDetails.length +
            " to go..."
        );
      });
    } else {
      console.log(
        "File not created (is Print-Indikator): " +
          chartEntry.outfilePath +
          ", " +
          chartDetails.length +
          " to go..."
      );
    }

    await createSvgImages(chartDetails);
  } else {
    console.log("...done!");
    await exporter.killPool();
    process.exit();
  }
}

//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript) {
  return eval("(" + serializedJavascript + ")");
}
