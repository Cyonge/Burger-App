const express = require("express");
const fs = require("fs");


var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this is an express feature that creates a route to the assets folder where the css and JS lives
// app.use(express.static("public"));
app.use(express.json());



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });