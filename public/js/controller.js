console.log('controller here');

posts = [
  {
    title: 'Blog post title',
    body: 'Sed pulvinar magna odio, ut mattis sapien scelerisque vitae. Sed non auctor massa. Vestibulum mollis at augue at scelerisque. Duis et nunc lacus. Ut ornare efficitur justo nec facilisis. Donec pharetra porta sapien ac varius. Ut vehicula scelerisque erat, in cursus quam dapibus sit amet. Maecenas eu quam at dolor convallis maximus.',
    author: 'Pinky McGee',
    date: new Date('1971', '02', '01'),
    comments: 'Lots of comments',
  }];

blog.controller('controller', ['$scope', function($scope) { 
  $scope.firstpost = posts[0];
}]);

