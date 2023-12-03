// var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Response sent ...");
  var data = { name: "BiswaRanjan Samal" };
  res.send(data);
  res.end();
});

app.use(express.static(path.join(__dirname, "../public")));
app.listen(5000);
console.log("Server is listening on port number 5000 ...");
