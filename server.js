// 2. Your `server.js` file should require the basic npm packages we've used
// in class: `express`, `body-parser` and `path`.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// pointing server to a series of "route" files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener WHERE THE ACTION STARTS
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
