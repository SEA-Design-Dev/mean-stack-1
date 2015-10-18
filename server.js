"use strict";

var express = require("express");
var app = express();
var router = express.Router();

app.set("port", (process.env.PORT || 5000));

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/", router);

app.listen(app.get("port"), function() {
  console.log("Express server is running on port", app.get("port"));
});
