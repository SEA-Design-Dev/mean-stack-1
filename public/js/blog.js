var blog = angular.module("intellyBlog", []);

var posts = [
  {
    title: 'Blog post title',
    content: 'Sed pulvinar magna odio, ut mattis sapien scelerisque vitae. Sed non auctor massa. Vestibulum mollis at augue at scelerisque. Duis et nunc lacus. Ut ornare efficitur justo nec facilisis. Donec pharetra porta sapien ac varius. Ut vehicula scelerisque erat, in cursus quam dapibus sit amet. Maecenas eu quam at dolor convallis maximus.',
    author: 'Pinky McGee',
    date: new Date('1971', '02', '01'),
    comments: 'Lots of comments',
  },
    {
    title: 'The title of another blog post',
    content: 'Sed pulvinar magna odio, ut mattis sapien scelerisque vitae. Sed non auctor massa. Vestibulum mollis at augue at scelerisque. Duis et nunc lacus. Ut ornare efficitur justo nec facilisis. Donec pharetra porta sapien ac varius. Ut vehicula scelerisque erat, in cursus quam dapibus sit amet. Maecenas eu quam at dolor convallis maximus.',
    author: 'Phyllis Diller',
    date: new Date('2015', '09', '08'),
    comments: 'Not so many comments',
  },
    {
    title: 'People are just posting way too many blogs',
    content: 'Sed pulvinar magna odio, ut mattis sapien scelerisque vitae. Sed non auctor massa. Vestibulum mollis at augue at scelerisque. Duis et nunc lacus. Ut ornare efficitur justo nec facilisis. Donec pharetra porta sapien ac varius. Ut vehicula scelerisque erat, in cursus quam dapibus sit amet. Maecenas eu quam at dolor convallis maximus.',
    author: 'Fred Savage',
    date: new Date('2014', '10', '21'),
    comments: 'Endless comments and complaints',
  },
    {
    title: 'This blogging has to stop already',
    content: 'Sed pulvinar magna odio, ut mattis sapien scelerisque vitae. Sed non auctor massa. Vestibulum mollis at augue at scelerisque. Duis et nunc lacus. Ut ornare efficitur justo nec facilisis. Donec pharetra porta sapien ac varius. Ut vehicula scelerisque erat, in cursus quam dapibus sit amet. Maecenas eu quam at dolor convallis maximus.',
    author: 'Ginger from \"Gilligan\'s Island\"',
    date: new Date('2012', '05', '08'),
    comments: 'disinterested comments',
  }
];

var form = ['title', 'content', 'author', 'date', 'comments'] 
var newEntry = {};

document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  newEntry.title = document.getElementById(form[0]).value;
  newEntry.content = document.getElementById(form[1]).value;
  newEntry.author = document.getElementById(form[2]).value;
  newEntry.date = document.getElementById(form[3]).value;
  newEntry.comments = document.getElementById(form[4]).value;
  console.log(newEntry); 
  for (var i = 0; i < form.length; i++){
    document.getElementById(form[i]).value = "";
  }
  posts.unshift(newEntry);
});




