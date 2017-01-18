//Include the exporter module
const exporter = require('highcharts-export-server');
var serialize = require('serialize-javascript');
var fs = require('fs');
var path = require('path');
var chartId=4716;
var configPath = 'charts/configs/portal/';
var infilePath = path.join(__dirname, '../' + configPath + chartId + '.json');
var configFile = fs.readFileSync(infilePath, 'utf8');
var config = deserialize(configFile);

var imagePath = 'images/portal/';
var outfilePath = path.join(__dirname, '../' + imagePath + chartId + '.svg');
console.log(outfilePath);

//Export settings 
var exportSettings = {
    type: 'svg',
    options: config,
    outfile: outfilePath
};

//Set up a pool of PhantomJS workers
exporter.initPool();

//Perform an export
/*
    Export settings corresponds to the available CLI arguments described
    above.
*/
//console.log(exportSettings);
exporter.export(exportSettings, function (err, res) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (res.data).
    //If the output is a PDF or SVG, it will contain a filename (res.filename).
    console.log('File created: ' + res.filename);
    //fs.writeFileSync(outfilePath, res.data, 'base64');
    //Kill the pool when we're done with it, and exit the application
    exporter.killPool();
    process.exit(1);
});


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}