'use strict';
var getRandomWord = require('./getRandom.js');
var adjective = require('./adjective.js');
var noun = require('./noun.js');
var verb = require('./verb.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.post('/post_adjective', function(req, res) {
  console.log(req.body.word);
  adjective[req.body.word] = true;
  res.json({message: "Ya did it!", confirm: req.body.word})
});

app.post('/post_noun', function(req, res) {
  console.log(req.body.word);
  noun[req.body.word] = true;
  res.json({message: "Ya did it!", confirm: req.body.word})
});

app.post('/post_verb', function(req, res) {
  console.log(req.body.word);
  verb[req.body.word] = true;
  res.json({message: "Ya did it!", confirm: req.body.word})
});

app.get('/get_adjective', function(req, res) {
  // console.log("adjective => "+ adjective)
  res.json(getRandomWord(adjective()));
});

app.get('/get_verb', function(req, res) {
  res.json(getRandomWord(verb()));
});

app.get('/get_noun', function(req, res) {
  res.json(getRandomWord(noun()));
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

// app.get('/', function(req, res) {
//   res.send('hello, universe');
// });
