var express = require('express');
var app = express();


app.use(function(req,res,next){
	process.stdout.write(req.method.toUpperCase() + " " + req.path+" ");
	next();
})


app.get('/', function(req,res){
	var status=200;
	console.log(status);
	res.status(status).send('GET request to homepage');
	//res.sendStatus
	//res.status(200).send("200 good");

});


app.get('/news', function(req,res){
	var status=200;
	console.log(status);
	res.status(status).send('GET request to news');
	//res.sendStatus
	//res.status(200).send("200 good");

});

app.listen(3000, function(){
console.log('hey i am on port 3000');
});