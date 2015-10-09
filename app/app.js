// require('angular');
// require('angular-route');
(function(){

	'use strict';
	// Declare app level module which depends on filters, and services
	var AwesomeBlogApp = angular.module('AwesomeBlog', ['ngRoute']).

	config(["$routeProvider", function ($routeProvider) {
		$routeProvider

		////route home page blog posts//////////
			.when("/blogposts", {
			templateUrl: "partials/blogpost.html",
			controller: "BlogpostsCtrl as vm",
		})

		/////form to make more blog posts///////
			.when("/blogposts/new", {
			templateUrl: "partials/form.html",
			controller: "BlogFormCtrl as vm",
		})
			.when("/blogposts/:blogpost/edit", {
			templateUrl: "partials/form.html",
			controller: "BlogFormCtrl as vm",
		})
			.when("/blogposts/:blogpost_id", {
			templateUrl: "partials/blog.html",
			controller: "BlogpostCtrl as vm",
		})
			.otherwise({
			redirectTo: "/blogposts",
		});

	}]);

}());

// require('./scripts/blog.service');
// require('./scripts/blog.ctrl');
// require('./blog_form.ctrl');
