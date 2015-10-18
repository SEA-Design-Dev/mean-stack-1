"use strict";

require("../app.js");

var token = require("../token.js");
var rootUrl = "https://api.github.com";
var headerAuth = {"Authorization": "token " + token.oauthToken};

(function () {

  angular.module("intellyBlog").service("BlogsService", ["$http", function ($http) {

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get(rootUrl + "/gists/" + id, {
            headers: headerAuth
          });
        } else {
          return $http.get(rootUrl + "/users/hollislau/gists", {
            headers: headerAuth
          });
        }
      },
      update: function (model) {
        return $http.patch(rootUrl + "/gists/" + model.id, model.model, {
          headers: headerAuth
        });
      },
      create: function (model) {
        return $http.post(rootUrl + "/gists", model.model, {
          headers: headerAuth
        });
      },
      delete: function (model) {
        return $http.delete(rootUrl + "/gists/" + model.id, {
          headers: headerAuth
        });
      }
    };
    return Blog;
  }]);

})();
