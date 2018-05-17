const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080

var app = express();

app.use(express.static(__dirname + '/dist/arm-app'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
