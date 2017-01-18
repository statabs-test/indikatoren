const exporter = require('highcharts-export-server');
var fs = require('fs');
var path = require('path');
var chartIds = [4716,4127];

exporter.initPool();
createSvgImages(chartIds);


function createSvgImages(chartIds){
    if (chartIds.length > 0){
        
        var chartId = chartIds.pop();
        var configPath = 'charts/configs/portal/';
        var infilePath = path.join(__dirname, '../' + configPath + chartId + '.json');
        var configFile = fs.readFileSync(infilePath, 'utf8');
        var config = deserialize(configFile);
        var imagePath = 'images/portal/';
        var outfilePath = path.join(__dirname, '../' + imagePath + chartId + '.svg');

        var exportSettings = {
            type: 'svg',
            options: config,
            outfile: outfilePath
        };

        exporter.export(exportSettings, function (err, res) {
            //The export result is now in res.
            //If the output is not PDF or SVG, it will be base64 encoded (res.data).
            //If the output is a PDF or SVG, it will contain a filename (res.filename).
            console.log('File created: ' + res.filename);
            createSvgImages(chartIds);
        });
    }
    else {
        console.log('...done!');
        exporter.killPool();
        process.exit(1);
    }
}


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}

