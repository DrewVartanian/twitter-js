var express = require('express')
var routes = require('./routes/');
var swig = require('swig');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 }
}));

app.use(express.static('public'));

app.use('/',routes);

// app.use('/stylesheets',function(req,res){
// 	res.sendFile(__dirname+"/public/stylesheets"+req.path);
// })

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');

swig.setDefaults({ cache: false });

app.listen(3000, function(){
	console.log('hey i am on port 3000');
});