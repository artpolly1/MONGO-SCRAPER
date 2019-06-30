//dependencies 
const express = require("express");

//create the PORT 
const PORT = process.env.PORT || 3000;

//initialize express
const app = express();

//setup express router 
const router = express.Router();

//route to access css in static diretory 
app.use(express.static(__dirname + "/public"));

//create router request
app.use(router);


//confirm PORT is working 
app.listen(PORT, function() {
    console.log("The spoon doesn't exsist on port:" + PORT)
});






