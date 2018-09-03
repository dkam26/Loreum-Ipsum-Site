
fs = require("fs");

function mergeValues(values, content) {
        content = content.replace("{{output}}", values);
    return content;
}
function view(templateName, values, response){
     var fileContents = fs.readFileSync('./views/' + templateName + '.html',{encoding:"utf8"});
     fileContents = mergeValues(values, fileContents);
     response.write(fileContents);

}
module.exports.view = view;