//Include the exporter module
const exporter = require('highcharts-export-server');


//Export settings 
var exportSettings = {
    type: 'svg',
    infile: 'charts/configs/portal/4718.json',
    constr: 'Chart',
    outfile: 'test.svg'
};


//Set log level
exporter.logLevel(4);

//Set up a pool of PhantomJS workers
exporter.initPool({
    maxWorkers: 1
});

//Perform an export
/*
    Export settings corresponds to the available CLI arguments described
    above.
*/
exporter.export(exportSettings, function (err, res) {
    //The export result is now in res.
    //If the output is not PDF or SVG, it will be base64 encoded (res.data).
    //If the output is a PDF or SVG, it will contain a filename (res.filename).
    console.log('Successfully exported to ' + res.filename);

    //Kill the pool when we're done with it, and exit the application
    exporter.killPool();
    process.exit();
});



