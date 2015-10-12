"use strict";

var mongoose = require("mongoose");

var BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: String,
  comments: String
});

module.exports = mongoose.model("Blog", BlogSchema);
