var router = require("./router.js");
var http = require('http');
http.createServer(function (request, response){
    router.home(request, response)
}).listen(1337, '127.0.0.1');
console.log('App running')