/*var express = require('express');
var path = require('path');
var app = express();

//app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || '8080');

const port = process.env.PORT || '8080';

app.set('port', port);
app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
    res.set('Content-Type', 'text/html')
        .sendFile(path.join(__dirname + '/dist/index.html'))
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost - " + app.get('port'))
});*/

/*var express = require('express');
var app = express();
var http = require('http');

var port = process.env.PORT || '3000';

app.set('port', port);

var server = http.createServer(app);

server.listen(port, function () {
    console.log('Server running at http://localhost:' + port);
});*/

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080

/*express()
  .get('/', (req, res) => res.render('src/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/

var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
    //Path to your main file
    res.status(200).sendFile(path.join(__dirname + '../src/index.html')); 
  });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

console.log('Directory name: ' + __dirname)