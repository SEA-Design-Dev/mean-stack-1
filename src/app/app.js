require("angular");
require("angular-route");

(function () {

  "use strict";

  var app = angular.module("intellyBlog", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/blogs", {
      templateUrl: "views/blogs/blogs_list.html",
      controller: "BlogsCtrl as vm",
    })
    .when("/blogs/new", {
      templateUrl: "views/blog/blog_form.html",
      controller: "BlogFormCtrl as vm",
    })
    .when("/blogs/:blog_id/edit", {
      templateUrl: "views/blog/blog_form.html",
      controller: "BlogFormCtrl as vm",
    })
    .when("/blogs/:blog_id", {
      templateUrl: "views/blog/blog_detail.html",
      controller: "BlogCtrl as vm",
    })
    .otherwise({
      redirectTo: "/blogs",
    });
  }]);

})();
