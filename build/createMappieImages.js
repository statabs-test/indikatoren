// invoke in bash using this command line: 
// node node_modules/casperjs/bin/casperjs.js build/createUmweltberichtConfigs.js
/* 
    global Highcharts
*/

var charts = [];
var casper = require('casper').create();
var urlbase = 'https://statabs-test-indikatoren-jonasbieri.c9users.io/chart.html?id=';
var fs = require('fs');
var pathBase = "metadata/single/";

// http://phantomjs.org/api/fs/method/list.html
var ubFileList = fs.list(pathBase);
//remove . and .. from list
ubFileList.shift();
ubFileList.shift();

//casper.echo(ubFileList);
casper.options.viewportSize = { width: 485, height: 415 };

// Open dummy web site in order to call start()
casper.start('https://google.ch');

//loop over array of urls: https://stackoverflow.com/a/25601585 
while (ubFileList.length > 0) {
    var id = ubFileList.pop().substr(0,4);
    var idText = padLeft(id, 4);

    (function(id){

        //evaluate json and check if indicator belongs to kennzahlenset Umwelt
        var currentConfig = require(fs.workingDirectory + "/" + pathBase + id + ".json");
        //if (currentConfig.template == "mappie001" && currentConfig.visible) {
        if (currentConfig.id == 5824) {
            
            var url = urlbase + currentConfig.id; 
            //close current page to release memory, https://stackoverflow.com/a/18156020
            casper.then(function() {
                casper.echo('Closing page to free RAM...');
                casper.page.close();
                casper.page = require('webpage').create();
            });
            
        
            
            casper.thenOpen(url, function() {
                casper.echo('Opening chart '+ id + ' located at ' + url);
                // Wait for the page to be loaded, i.e. svg node is present
                //this.waitForSelector('svg');
                this.waitForSelector('#renderDone', function(){
                    //get Highcharts.charts array
                    //charts = this.evaluate(getCharts);
                    //save options of first chart into file
                    //var content = serialize(charts[0].options, {space: 2});
                    //var content = casper.fetchText('svg');
                    
                    var content = this.getHTML('#chartSVG', true);
                    
                    var path = 'images/indikatorenset/' + id + '.svg';
                    casper.echo('Saving contents to ' + path + '...');
                    fs.write(path, content, 'w');
                    path = 'images/portal/' + id + '.svg';
                    casper.echo('Saving contents to ' + path + '...');
                    fs.write(path, content, 'w');

                    casper.capture('screenshots/' + id + '.png');
                });
            });
            /*
            casper.then(function(){
                this.wait(500, function() {
                    this.echo("I've waited...");
                });
            });
            
            */
            
            /*
            casper.then(function(){
                //get Highcharts.charts array
                charts = this.evaluate(getCharts);
                //save options of first chart into file
                //var content = JSON.stringify(charts[0].options, null,'\t');
                //var content = serialize(charts[0].options, {space: 2});
                
                var content = document.querySelector('#serialized_highcharts').innerText;
                var path = 'charts/configs/umweltbericht/' + id + '.json';
                casper.echo('Saving contents to ' + path + '...');
                fs.write(path, content, 'w');
                casper.capture('screenshots/' + id + '.png');
            });
            */
        }
        else {
            //casper.echo('Chart ' + id + ' is either not visible (visible: ' + currentConfig["visible"] + '), or belongs to kennzahlenset ' + currentConfig.kennzahlenset +', which is not "Umwelt", thus ignoring here. ');
        }
    })(idText);
}        


//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}


function getCharts() {
    return window.Highcharts.charts;
}


casper.run(function() {
    this.exit();
});

