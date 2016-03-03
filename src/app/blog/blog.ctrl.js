require("../app.js");

(function () {

  "use strict";

  angular.module("intellyBlog").controller("BlogCtrl", ["BlogsService", "$routeParams", "$location", function (BlogsService, $routeParams, $location) {
    var vm = this;

    vm.delete = deleteBlog;

    initialize();

    function initialize() {
      BlogsService
        .get($routeParams.blog_id)
        .then(function (resp) {
          vm.blog = resp.data;
        });
    }

    function deleteBlog (blog) {
      BlogsService.delete(blog).then(function () {
        $location.path("/blogs");
      });
    }

  }]);

})();
