// RESTful ROUTES

// initializing required libraries
var express           = require("express"),
	bodyParser        = require("body-parser"),
	mongoose          = require("mongoose"),
	app               = express();

mongoose.connect("mongodb://localhost/project_backend");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// defining mongodb Schema
var projectSchema = new mongoose.Schema({
	name: String,
	age: Number,
	
});
var Project = mongoose.model("Project", projectSchema);


// ROUTES

// getAll Route
app.get("/getAll",function(req,res){
Project.find({},function(err,info)
{
	if(err){
		console.log(err);
	}
	else
	{
		res.render("index",{info:info});
	}
});
});

// add Route
app.get("/add",function(req, res) {
	res.render("new");
});

// POST Route for add
app.post("/getAll",function(req,res){
	
	Project.create(req.body.info,function(err,newInfo){
		if(err){
			console.log(err);
		}
		else{
			res.redirect("/getAll");
		}
	});
});


// getById Route
app.get("/getById/:id",function(req, res) {
	var id = req.params.id;
	Project.findById(id,function(err,info){
		if(err){
			console.log(err);
		}
		else{
			res.send(info);
		}
	});
});

// search Route
app.get("/search/:name",function(req,res){
	var name = req.params.name;
	 Project.findOne({name: name}, function (err, name) {
		 if(err){
			 console.log(err);
		 }
		 else{
			 res.send(name);
		 }
	 });
 });


// deleteById Route
app.get("/deleteById/:id",function(req, res) {
	Project.findByIdAndRemove(req.params.id,function(err,newInfo){
		if(err){
			console.log(err);
		}
		else{
			res.send("Deleted Successfully");
		}
	});
});

// PAGE NOT FOUND
app.get("*",function(req,res){
res.send("Sorry,page not found...");});

// Cloud9 listening on port
app.listen(process.env.PORT,process.env.IP,function(){
	console.log("App started");
});