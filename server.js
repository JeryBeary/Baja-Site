var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

app.use(express.static('Resources'));
app.get('/',function(req,res){
	res.sendfile('home.html');
});
app.listen(3000,function(){
console.log("Express Started on Port 3000");
});