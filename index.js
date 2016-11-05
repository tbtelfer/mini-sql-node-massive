var massive = require('massive');
var connectionString = "postgres://postgres:newday@localhost/sandbox";
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

// Use our connection string to get a copy/instance of massive to use.
// Then add it to our app as a variable called db.
var massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db',massiveInstance);


// require, then call the controller to get the planes in the database
var controller = require('./controller.js');

controller.getPlanes();
///////THE CODE BELOW WAS MOVED TO controller.js
// var db = app.get('db');
// //add a new plane
// db.new_plane(function(err, planes){
//   console.log(err, "plane added")
// })
// // add planes from get_planes file
// db.get_planes(function(err, planes){
//     console.log(err, planes)
// })

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
