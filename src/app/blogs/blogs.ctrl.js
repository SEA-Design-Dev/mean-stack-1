"use strict";

require("../app.js");
require("../filters/pager.filter.js");

(function () {

  angular.module("intellyBlog").controller("BlogsCtrl", ["BlogsService", "$http", "$filter", "$log", "$q", function (BlogsService, $http, $filter, $log, $q) {
    var vm = this;

    vm.blogs = [];

    vm.pagination = {
      currentPage: 0,
      perPage: 2,
      getOffset: function () {
        return vm.pagination.currentPage * vm.pagination.perPage;
      },
      prevPage: function () {
        vm.pagination.currentPage--;
      },
      nextPage: function () {
        vm.pagination.currentPage++;
      }
    };

    initialize();

    function initialize () {
      BlogsService
        .get()
        .then(successHandler, errorHandler);
    }

    function successHandler (resp) {
      var data = resp.data;

      angular.forEach(data, function(gist) {
        var blogObj = gist.files.blog;

        if (angular.isDefined(blogObj)) {
          $http
            .get(blogObj.raw_url)
            .then(function (resp) {
              setBlogInfo(gist, resp.data);
            }, function (resp) {
              $log.error("Could not request " + blogObj.raw_url, resp);
            });
        }
      });

      $log.info("response", resp);
    }

    function errorHandler (resp) {
      vm.error = resp.data;
      $log.error("response", resp);
    }

    function setBlogInfo (gist, content) {
      var blog = {
        title: gist.description,
        content: content,
        author: gist.owner.login,
        date: $filter("date")(gist.updated_at),
        comments: gist.comments + " comments",
        id: gist.id
      };
      vm.blogs.push(blog);
    }

  }]);

})();
