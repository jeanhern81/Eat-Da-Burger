var express = require('express');
var exphbs  = require('express-handlebars');
var connection = require("./config/connection");
var bodyParser = require('body-parser')

var app = express();

var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./controllers/burger_controllers");

//app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});
