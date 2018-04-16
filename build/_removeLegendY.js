var fs = require('fs');
var pathBase = "charts/templates/";

fs.readdirSync(pathBase).forEach(file => {
    //try{
        var configFileContents = fs.readFileSync(path, 'utf8');
        var config = deserialize(configFileContents);
        //check if legend.y is defined
        if (config["legend"]["y"]){
            //only change file if only one occurence of 'y:' is found
            var count = (configFileContents.match(/y:/g) || []).length;
            if (count == 1){
                var changedFile = configFileContents.replace(/y:/g, "//y:");
                fs.writeFileSync(pathBase + file, changedFile);
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