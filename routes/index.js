var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

var tweetBank = require('../tweetBank');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function (req, res) {
  // res.sendFile(__dirname+"/public/stylesheets/style.css");
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.post('/submit', urlencodedParser, function (req, res) {
  // res.sendFile(__dirname+"/public/stylesheets/style.css");
  tweetBank.add(req.body.name,req.body.text);
  res.redirect('/');
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, list: list, showForm: true, name: name } );
});

module.exports = router;