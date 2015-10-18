"use strict";

require("../app.js");

(function () {

  angular.module("intellyBlog").controller("BlogCtrl", ["BlogsService", "$routeParams", "$http", "$filter", "$log", "$q", "$location", function (BlogsService, $routeParams, $http, $filter, $log, $q, $location) {
    var vm = this;

    vm.delete = deleteBlog;

    initialize();

    function initialize() {
      BlogsService
        .get($routeParams.blog_id)
        .then(successHandler, errorHandler);
    }

    function successHandler (resp) {
      var data = resp.data;
      var blogObj = data.files.blog;

      $http
        .get(blogObj.raw_url)
        .then(function (resp) {
          setBlogInfo(data, resp.data);
        }, function (resp) {
          $log.error("Could not request " + blogObj.raw_url, resp);
        });

      $log.info("read", resp);
    }

    function errorHandler (resp) {
      vm.error = resp.data;
      $log.error("Could not read " + resp);
    }

    function setBlogInfo (gist, content) {
      vm.blog = {
        title: gist.description,
        content: content,
        author: gist.owner.login,
        date: $filter("date")(gist.updated_at),
        comments: gist.comments + " comments",
        id: gist.id
      };
    }

    function deleteBlog (blog) {
      BlogsService.delete(blog).then(function (resp) {
        $location.path("/blogs");
        $log.info("deleted", resp);
      }, function (resp) {
        $log.error("Could not delete " + resp);
      });
    }

  }]);

})();
