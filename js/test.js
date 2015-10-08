// var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  //yay!
})

var blogSchema = mongoose.Schema ({
  title: String,
  content: String,
  author: String,
  date: String,
  comments: String
});

var Blog = mongoose.model('Blog', blogSchema);

var story1 = new Blog ({
  title: "This is the newest blog title",
  content: "Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content.",
  author: "Author Name",
  date: "1971-03-01",
  comments: "Comments"
});

var story2 = new Blog ({
  title: "This is the second blog title",
  content: "SECOND Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content.",
  author: "Author 2 Name",
  date: "1971-03-02",
  comments: "Comments"
});

var story3 = new Blog ({
  title: "This is the third blog title",
  content: "THIRD Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content.",
  author: "Author 3 Name",
  date: "1971-03-03",
  comments: "Comments"
});

var story4 = new Blog ({
  title: "This is the fourth blog title",
  content: " FOURTH Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content.",
  author: "Author 4 Name",
  date: "1971-03-04",
  comments: "Comments"
});

var story5 = new Blog ({
  title: "This is the fifth blog title",
  content: " FIFxTH Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content. Here's some paragraph content.",
  author: "Author 5 Name",
  date: "1971-03-05",
  comments: "Comments"
});



// var stories = [story1, story2, story3, story4];

// for (var i =0; i < stories.length; i ++) {
//   console.log(stories[i]);
//   // stories[i].save(function(err, stories[i]) {
//   //   if (err) return console.error(err);
//   // })
// }



// Blog.find(function (err, blogs) {
//   if (err) return console.error(err);
//   console.log(blogs);
// });

// console.log(story5);

story5.set('toObject', {getters: true});
var FreshContent = mongoose.model('story', story5)
var freshcontent = new FreshContent({title: 'This is the fifth'});

console.log(freshcontent.author);





