require('../app');

(function () {
  "use strict";

  angular.module("blog").controller("PostsCtrl", ["PostsService", function (PostsService) {
    var vm = this;

    vm.posts = [];
    vm.delete = deletePost;

    initialize();

    /////

    function initialize () {
      getPosts();
    }

    function getPosts () {
      PostsService.get().then(function (resp) {
        vm.posts = resp.data;
      });
    }

    function deletePost (post) {
      PostsService.delete(post).then(function () {
        getPosts();
      });
    }
  }]);
}());
