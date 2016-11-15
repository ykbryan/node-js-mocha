var express = require("express");
var app = express();
var index = require("./index");

app.get("/", function(req, res) {
  var number = parseInt(req.query.number, 10);
  res.send(index.returns(number));
});

app.listen(3000);
