var fs = require("fs");
var glob = require("glob");
var hashFiles = require('hash-files');

var hashes = {};
/*
var filePathsToCheck = {
	chartConfig: 'charts/templates/', 
	data: 'data/', 
	'configs/portal': 'configs/portal/', 
	template: 'charts/templates/'
};
*/
console.log('Searching for json files to add to hashesAfterBuild.json...');
var files = glob.sync("metadata/single/*.json");
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath);
    //strip whitespace from start of file and save file
    var fileContentsStripped = fileContents.slice(fileContents.indexOf('{'));
    fs.writeFileSync(filepath, fileContentsStripped);
    var indikator = JSON.parse(fileContentsStripped);
    if (indikator.visible == undefined || indikator.visible == true) {
        //console.log(filepath + ' is visible, proceeding with adding...');
        if (indikator.visibleInPortal == undefined || indikator.visibleInPortal == true) {
            //console.log(filepath + ' is visibleInPortal, proceeding with adding to all/hashesAfterBuild.json...');
            hashes[indikator.id] = {metadata: hashFiles.sync({files: filepath})};
            hashes[indikator.id]['chartConfig'] = hashFiles.sync({files: 'charts/templates/' + indikator.id + '.js'});
            hashes[indikator.id]['data'] = hashFiles.sync({files: 'data/' + indikator.id + '.tsv'});
            hashes[indikator.id]['configs/portal'] = hashFiles.sync({files: 'configs/portal/' + indikator.id + '.json'});
            hashes[indikator.id]['template'] = hashFiles.sync({files: 'charts/templates/' + indikator.template + '.js'});
        }
        else {
            //console.log(filepath + ' is NOT visibleInPortal, ignoring for all/hashesAfterBuild.json');
        } 
    }
    else {
        //console.log(filepath + ' NOT visible, ignoring');
    }
});
console.log('Saving hash databas...');
saveToJsonFile('hashesAfterBuild', 'all/', hashes, console);

function saveToJsonFile(name, dir, obj, console){
    var jsonFile = JSON.stringify(obj, null, '\t');
    fs.writeFile('metadata/' + dir +  name + '.json', jsonFile);
}



/*
var hasher = require('folder-hash');
var fs = require("fs");

//exclude dotFiles
var options = { 
    excludes: ['.*'], 
    match: { 
        basename: true, 
        path: false 
    } 
};

var dirNames = [
    'metadata/single',
    'charts/templates',
    'data'
    ];

//working with promises: see https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach

var actions = dirNames.map(function(dirName){
    return hasher.hashElement(dirName, options);
});

var results = Promise.all(actions);

results.then(hash => {
        //console.log(data.toString()); 
        fs.writeFileSync('build/hashesAfterBuild.json', JSON.stringify(hash, null, '\t'));
    }
);
*/