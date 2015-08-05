var express = require('express');

var router = express.Router();

var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  // res.sendFile(__dirname+"/public/stylesheets/style.css");
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;