"use strict";

require("../app.js");

(function () {

  angular.module("intellyBlog").controller("BlogFormCtrl", ["BlogsService", "$routeParams", "$location", "$filter", function (BlogsService, $routeParams, $location, $filter) {
    var vm = this;

    vm.save = saveForm;

    vm.blog = {};

    initialize();

    function initialize () {
      if ($routeParams.blog_id) {
        BlogsService.get($routeParams.blog_id).then(function (resp) {
          vm.blog = resp.data;
        });
      }
    }

    function saveForm () {
      var method;
      var date = new Date(Date.now());

      vm.blog.date = $filter("date") (date);
      method = $routeParams.blog_id ? "update" : "create";
      BlogsService[method](vm.blog).then(function (resp) {
        $location.path("/blogs/" + resp.data._id);
      });
    }
  }]);

})();
