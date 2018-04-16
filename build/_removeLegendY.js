var fs = require('fs');
var pathBase = "charts/templates/";

var serialize = require('serialize-javascript');

fs.readdirSync(pathBase).forEach(file => {
    var id = file.substr(0,4);
    var idText = padLeft(id, 4);
    var path = 'charts/configs/portal/' + idText + '.json';
    //try{
        var configFileContents = fs.readFileSync(path, 'utf8');
        var config = deserialize(configFileContents);
        //check if legend.y is defined
        if (config["legend"]["y"]){
            //only change file if only one occurence of 'y:' is found
            var count = (configFileContents.match(/y:/g) || []).length;
            if (count == 1){
                var changedFile = configFileContents.replace(/y:/g, "//y:");
                fs.writeFileSync(path, changedFile);
            }
        }
    /*        
    }
    catch (error){
        //silently ignore errors
        //console.log(error);
    }
    */
});


//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}

//https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}