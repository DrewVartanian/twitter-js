var express = require('express');
var swig = require('swig');
var app = express();


app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
// var s = swig.renderFile(__dirname + '/views/index.html', {
// 	title : "An Example",
// 	people : [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}]
// });

// var title = "An Example";
// var person = {}
app.use(function(req,res,next){
	process.stdout.write(req.method.toUpperCase() + " " + req.path+" ");
	
	next();
})


app.get('/', function(req,res){
	var status=200;
	
	//res.status(status).send('GET request to homepage');
	//res.sendStatus
	//res.status(200).send("200 good");
	//res.status(status).send(s);
		res.render('index', { title : "An Example",
	 	people : [{name: "Gandalf"}, {name: "Frodo"}, {name: "Hermione"}]});

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