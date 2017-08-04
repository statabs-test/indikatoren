var fs = require("fs");
var glob = require("glob");
var indikatoren = [];
var kuerzelById = {};
var idByKuerzel = {};
var templatesById = {};
console.log('Searching for json files to add to json databases...');
var files = glob.sync("metadata/single/*.json");
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath);
    //strip whitespace from start of file and save file
    var fileContentsStripped = fileContents.slice(fileContents.indexOf('{'));
    fs.writeFileSync(filepath, fileContentsStripped);
    var indikator = JSON.parse(fileContentsStripped);
    if (indikator.visible == undefined || indikator.visible == true) {
        console.log(filepath + ' is visible, proceeding with adding...');
        if (indikator.visibleInPortal == undefined || indikator.visibleInPortal == true) {
            console.log(filepath + ' is visibleInPortal, proceeding with adding to indikatoren.js...');
            indikatoren.push(indikator);            
        }
        else {
            console.log(filepath + ' is NOT visibleInPortal, ignoring for indikatoren.js');
        } 
        kuerzelById[indikator.id] = indikator.kuerzel;
        idByKuerzel[indikator.kuerzel] = indikator.id.toString();
        templatesById[indikator.id] = indikator.template;
    }
    else {
        console.log(filepath + ' NOT visible, ignoring');
    }
});
console.log('Saving json database...');
createFiles('indikatoren', 'portal/', indikatoren, console);
createFiles('kuerzelById', 'all/', kuerzelById, console);
createFiles('idByKuerzel', 'all/',idByKuerzel, console);
createFiles('templatesById', 'all/',templatesById, console);
//console.log('...done!');

function createFiles(name, dir, obj, console){
    saveToJsFile(name, dir, obj, console);
    saveToJsonFile(name, dir, obj, console);
}

function saveToJsFile(name, dir, obj, console){
    var jsFile = "var " +  name + " = " + JSON.stringify(obj, null, '\t') + ";";
    fs.writeFile('metadata/' + dir +  name + '.js', jsFile);
}

function saveToJsonFile(name, dir, obj, console){
    var jsonFile = JSON.stringify(obj, null, '\t');
    fs.writeFile('metadata/' + dir +  name + '.json', jsonFile);
}
