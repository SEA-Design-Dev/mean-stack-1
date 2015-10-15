"use strict";

require("../app.js");

(function () {

  angular.module("intellyBlog").controller("BlogFormCtrl", ["BlogsService", "$routeParams", "$http", "$log", "$q", "$location", "$filter", function (BlogsService, $routeParams, $http, $log, $q, $location, $filter) {
    var vm = this;

    vm.save = saveForm;

    vm.blog = {};

    initialize();

    // function initialize () {
    //   if ($routeParams.blog_id) {
    //     BlogsService.get($routeParams.blog_id).then(function (resp) {
    //       vm.blog = resp.data;
    //     });
    //   }
    // }

    function initialize() {
      if ($routeParams.blog_id) {
        BlogsService
          .get($routeParams.blog_id)
          .then(successHandler, errorHandler);
      }
    }

    function successHandler (resp) {
      var data = resp.data;
      var blogObj = data.files.blog;

      $http
        .get(blogObj.raw_url)
        .then(function (resp) {
          setBlogInfo(data, resp);
        }, function (resp) {
          $log.error("Could not request " + blogObj.raw_url, resp);
        });

      $log.info("response", resp);
    }

    function errorHandler (resp) {
      vm.error = resp.data;
      $log.error("response", resp);
    }

    function setBlogInfo (gist, resp) {
      vm.blog = {
        title: gist.description,
        content: resp.data,
        author: gist.owner.login,
        date: $filter("date")(gist.updated_at),
        comments: gist.comments + " comments",
        id: gist.id
      };
    }

    function saveForm () {
      var method;
      var postObj = {
        "description": vm.blog.title,
        "public": true,
        "files": {
          "blog": {
            "content": vm.blog.content
          }
        }
      };

      method = $routeParams.blog_id ? "update" : "create";
      BlogsService[method](postObj).then(function (resp) {
        $location.path("/blogs/" + resp.data.id);
        $log.info("created", resp);
      }, function (resp) {
        $log.error("Could not create " + resp);
      });
    }
  }]);

})();
