//dependencies 
const express = require("express");
const mongoose = require("mongoose");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

//create the PORT 
const PORT = process.env.PORT || 3000;

//initialize express
const app = express();


//setup express router 
const router = express.Router();

//require our routes files 
require("./config/routes")(router);



//route to access css in static diretory 
app.use(express.static(__dirname + "/public"));


//express handlebars
app.engine("handlebars", expressHandlebars({
   defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//body parser
app.use(bodyParser.urlencoded({
    extneded: true
}));

//create router request
app.use(router);

//deployed database 
const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect to db
mongoose.connect(db, function(error){
if(error){
    console.log(error);
}
else {
    console.log("mongoose connection was a success!");
}
});



//confirm PORT is working 
app.listen(PORT, function() {
    console.log("There's been a connection made on :" + PORT)
});






