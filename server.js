////////////////
//DEPENDENCIES//
////////////////
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

//////////////
//MIDDLEWARE//
//////////////
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/client'));

/////////////
//ENDPOINTS//
/////////////






///////////////
//CONNECTIONS//
///////////////

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('listening to port ', port);
});