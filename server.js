"use strict";

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var Blog = require("./models/blog");

mongoose.connect("mongodb://localhost/intelly");

app.set("port", (process.env.PORT || 5000));
app.use(bodyParser.json());

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));
app.use("/", router);

// router.get("/public/*", function (req, res) {
//   var path = req.path;
//   console.log("path", path);
//   if (path.match(/node_modules/)) {
//     res.sendFile(__dirname + path);
//   } else {
//     res.sendFile(__dirname + path);
//   }
// });


// CREATE

var blogsRoute = router.route("/api/blogs");

blogsRoute.post(function (req, res) {
  var blog = new Blog();

  blog.title = req.body.title;
  blog.content = req.body.content;
  blog.author = req.body.author;
  blog.date = req.body.date;
  blog.comments = req.body.comments;

  blog.save(function (err) {
    if (err) {
      res.send(err);
    }

    res.json(blog);
  });
});

// READ

blogsRoute.get(function (req, res) {
  Blog.find(function (err, blogs) {
    if (err) {
      res.send(err);
    }

    res.json(blogs);
  });
});

var blogRoute = router.route("/api/blogs/:blog_id");

blogRoute.get(function (req, res) {
  Blog.findById(req.params.blog_id, function (err, blog) {
    if (err) {
      res.send(err);
    }

    res.json(blog);
  });
});

// UPDATE

blogRoute.put(function (req, res) {
  Blog.findById(req.params.blog_id, function (err, blog) {
    if (err) {
      res.send(blog);
    }

    blog.title = req.body.title;
    blog.content = req.body.content;
    blog.author = req.body.author;
    blog.date = req.body.date;
    blog.comments = req.body.comments;

    blog.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json(blog);
    });
  });
});

// DELETE

blogRoute.delete(function (req, res) {
  Blog.findByIdAndRemove(req.params.blog_id, function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "Successfully removed blog." });
  });
});

app.listen(app.get("port"), function() {
  console.log("Express server is running on port", app.get("port"));
});


// app.route("/").get(function(req, res) {
//   res.sendFile("index.html", {root: __dirname + "/public"});
// });
