console.log('controller here');

blog.controller('controller', ['$scope', function($scope) { 
  $scope.title = 'Blog post title'
  $scope.body = 'Here is a sentence. Here is another. Here is a sentence. Here is another. Here is a sentence. Here is another. Here is a sentence. Here is another. Here is a sentence. Here is another. Here is a sentence. Here is another. Here is a sentence. Here is another. Here is a sentence. Here is another. Here is a sentence. Here is another.'; 
  $scope.author = 'Pinky McGee';
  $scope.date = 'March 1, 1971';
  $scope.comments = 'Lots of comments';
}]);

