 var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile(__dirname +'/index1.html');
 });

 app.get("/userInfo/:id", function(req,res){

 	if(req.params.id !="" || req.params.id != null) {
    res.send("<h1>Details for User ID:" + req.params.id);
  } else{
    res.send("Error: Please provide a user id");
  }


 });

  app.post("/user/add", function(req, res) { 
	/* some server side logic */
	res.send("OK");
  });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]); 
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });