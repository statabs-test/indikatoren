var fs = require("fs");
var SVGO = require('svgo');
var svgo = new SVGO({});
var filePaths = [];

var views = ['indikatorenset', 'portal'/*, 'print'*/];
views.forEach(function(view){
    console.log('Starting creation of chart config for indikatorensetView=' + view);
    var files = JSON.parse(fs.readFileSync('tmp/chartsToBuild.json'));
    files.forEach(function(id){        
       filePaths.push('images/' + view + '/' + id + '.svg'); 
    });
});
console.log(filePaths);


//working with promises: see https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach

var actions = filePaths.map(function(filePath){
    var svg = fs.readFileSync(filePath, 'utf8');
    return svgo.optimize(svg);
});

var results = Promise.all(actions);

results.then(svg => {
         fs.writeFileSync(path + indikator.id + '.svg', svgWithViewBox);
    }
);
