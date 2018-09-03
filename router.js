var renderer = require("./renderer.js");
var loremIpsum = require('lorem-ipsum');
var querystring = require("querystring");
var commonHeaders = { 'Content-Type':'text/html'}
function home(request, response){
    if(request.url === "/"){
        if(request.method.toLowerCase() === "get"){
        response.writeHead(220, commonHeaders);
        renderer.view("index","",response);
        response.end();
        
    }else if(request.method.toLowerCase() === "post"){
        response.writeHead(220, commonHeaders);
        request.on("data", function(postBody){
            var query = querystring.parse(postBody.toString());
            var numberOf = query.number;
            var typeOfPhrase = query.typeword;
            var output  = loremIpsum({
                count: numberOf                     // Number of words, sentences, or paragraphs to generate.
              , units: typeOfPhrase            // Generate words, sentences, or paragraphs.
              , sentenceLowerBound: 5         // Minimum words per sentence.
              , sentenceUpperBound: 15        // Maximum words per sentence.
              , paragraphLowerBound: 3        // Minimum sentences per paragraph.
              , paragraphUpperBound: 7      
              , format: 'plain'               
              , random: Math.random                            
            });
            renderer.view("index", output , response);
            response.end();

        })
        
    }
}
}

module.exports.home = home;
