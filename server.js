var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Post = require("./models/post");

mongoose.connect("mongodb://localhost/blog")

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.use(bodyParser.json());

// Root route
router.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/app/index.html");
});

// All assets
router.get("/assets/*", function (req, res) {
  path = req.path.replace(/^\/assets/,'');
  if (path.match(/node_modules/)) {
    res.sendFile(__dirname + path);
  } else {
    res.sendFile(__dirname + "/public/" + path);
  }
});

// Register the router with the application
app.use("/", router);

// Create a new route with prefix /posts
var postsRoute = router.route("/api/posts");

// READ

// Create endpoint /api/posts for POST
postsRoute.post(function (req, res) {
  // Create a new instance of the Post model
  var post = new Post();

  // Set the post properties that came from the POST data
  post.title = req.body.title;
  post.content = req.body.content;
  post.author = req.body.author;
  post.date = req.body.date;
  post.comments = req.body.comments;

  // Save the post and check for errors
  post.save(function (err) {
    if (err) {
      res.send(err);
    }

    res.json(post);
  });
});

// Create endpoint /api/posts for GET
postsRoute.get(function(req, res) {
  // Use the Post model to find all posts
  Post.find(function (err, posts) {
    if (err) {
      res.send(err);
    }

    res.json(posts);
  });
});

// CREATE

// Create a new route for /posts/:post_id
var postRoute = router.route("/api/posts/:post_id");


// Create endpoint for /api/posts/:postID
postRoute.get(function(req, res) {
  // Use the post model to find a specific post
  Post.findById(req.params.post_id, function (err, post) {
    if (err) {
      res.send(err);
    }

    res.json(post);
  });
});

// UPDATE

// Change the post's stuff
postRoute.put(function(req, res) {
  // Use the Post model to find a specific post
  Post.findById(req.params.post_id, function (err, post) {
    if (err) {
      res.send(err);
    }

    // Update the post's title
    post.title = req.body.title;
    post.content = req.body.content;
    post.author = req.body.author;
    post.date = req.body.date;
    post.comments = req.body.comments;

    // Save the post and check for errors
    post.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json(post);
    });
  });
});

// DELETE

// Create endpoint /api/posts/:post_id for DELETE
postRoute.delete(function (req, res) {
  // Use the post model to find a specific post and remove it
  Post.findByIdAndRemove(req.params.post_id, function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "Successfully removed post." });
  });
});

app.listen(port);
console.log('server is running on localhost//:' + port);
