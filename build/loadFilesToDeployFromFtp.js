const fs = require("fs");
const https = require("https");
const request = require("request");
const filePath = "tmp/chartsToDeploy.txt";
const urlBase = "https://indikatoren.statabs.ch/";
const parse = require('csv-parse/lib/sync');
const child_process = require('child_process');
const eol = require("eol");
//var crlf = require('crlf');

/*
request(
    {
        'url':'https://indikatoren.statabs.ch/verzeichnis.txt'
    },
    function (error, response, body) {
        //if (!error && response.statusCode == 200) {
            console.log(body);
        //}
    }    
);


const options = {
    hostname: 'indikatoren.statabs.ch',
    port: 80,
    path: '/verzeichnis.txt',
    proxy: 'http://proxy1.bs.ch:3128'
};
  
const req = http.request(options, (res) => {
    console.log('Status: ${res.statusCode}');
    console.log('Body: ${res.body}');
});

*/


//get all charts to deploy
const chartListFile = fs.createWriteStream(filePath);

//request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))

const stream = request(urlBase + "verzeichnis.txt").pipe(chartListFile);
stream.on("finish", function() {
    //parse csv  
    const records = parse(fs.readFileSync(filePath), {
        columns: true,
        skip_empty_lines: true,
    });
    //TODO: only pipe to file if response status = 200 (https://stackoverflow.com/questions/51407928/pipe-after-successful-condition-node-js)
    const downloadFileContents = (url, filePath) => {
        const file = fs.createWriteStream(filePath);
        const stream2 = request(url, function (error, response, body){
            //console.log('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //console.log('body:', body); // Print the HTML for the Google homepage.
        }).pipe(file);
        // crlf.set(filePath, 'CRLF', function(err, endingType) {
        //     console.log('Setting CRLF for: ' + filePath);
        // });
        // file.end();
        // stream2.end();
        // var myContent = fs.readFileSync(filePath, "utf8");
        // console.log('Content: ' + myContent);
        //fs.writeFileSync(filePath + 'x',eol.auto(content));
        stream2.on("finish", function() {
            var fileContent = fs.readFileSync(filePath);
            fs.writeFileSync(filePath, eol.auto(fileContent.toString()));
        });           
    };
      
    //load json and tsv for each row
    records.forEach(row => {
        
        //for each line: download and save json / tsv
        console.log('downloading files for '+ row.Indikator + '...');
        downloadFileContents(urlBase + row.Indikator + '.json', 'metadata/single/' + row.Indikator + '.json');
        
        //checkout js and overwrite tsv for each chart with a branch number other than null
        if (row.Branch){
            console.log('checking out ' + row.Indikator + '.js and ' + row.Indikator + '.tsv from branch ' + row.Branch + '...');
            var gitJsCommand = 'git checkout origin/issue-' + row.Branch + ' -- charts/templates/' + row.Indikator + '.js';
            var gitTsvCommand = 'git checkout origin/issue-' + row.Branch + ' -- data/' + row.Indikator + '.tsv';
            console.log(gitJsCommand);
            try{
                child_process.execSync(gitJsCommand);
            }
            catch(error){
            }
            console.log(gitTsvCommand);
            try{
                child_process.execSync(gitTsvCommand);
            }
            catch(error){
            }
        }
        else{
            downloadFileContents(urlBase + row.Indikator + '.tsv', 'data/' + row.Indikator + '.tsv');    
        }
    });
    console.log('...done!');
    console.log('=== Test Links: ===');
    
    //open browser tab for visual check
    records.forEach(row => {
        console.log('http://127.0.0.1:8084/chart-details.html?id=' + row.Indikator);
    });
});

// fs.readFile('data/6129.tsv', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });

