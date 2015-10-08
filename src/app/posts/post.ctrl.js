require('../app');

angular.module("blog").controller("PostCtrl", ["PostsService", "$routeParams", function (PostsService, $routeParams) {
  var vm = this;

  initialize();

  function initialize() {
    PostsService
      .get($routeParams.post_id)
      .then(function (resp) {
        vm.post = resp.data;
      });
  }
}]);
