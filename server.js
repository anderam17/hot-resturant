var http = require("http");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on Port:" + PORT);
});