//Include the exporter module
const exporter = require('highcharts-export-server');
var path = require('path');
var chartId=4130;
var configPath = 'charts/configs/portal/';
var infilePath = path.join(__dirname, '../' + configPath + chartId + '.json');
console.log(infilePath);

var imagePath = 'images/portal/';
var outfilePath = path.join(__dirname, '../' + imagePath + chartId + '.svg');
console.log(outfilePath);

//Export settings 
var exportSettings = {
    type: 'svg',
    infile: infilePath,
    outfile: outfilePath
};

//Set up a pool of PhantomJS workers
exporter.initPool();

//Perform an export
/*
    Export settings corresponds to the available CLI arguments described
    above.
*/
console.log(exportSettings);
exporter.export(exportSettings, function (err, res) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (res.data).
    //If the output is a PDF or SVG, it will contain a filename (res.filename).
    console.log(res);
    //Kill the pool when we're done with it, and exit the application
    exporter.killPool();
    process.exit(1);
});