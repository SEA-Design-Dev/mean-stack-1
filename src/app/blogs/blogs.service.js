"use strict";

require("../app.js");

var token = require("../token.js");
var headerAuth = {"Authorization": "token " + token.oauthToken};

(function () {

  angular.module("intellyBlog").service("BlogsService", ["$http", function ($http) {

    var Blog = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get("https://api.github.com/gists/" + id, {
            headers: headerAuth
          });
        } else {
          return $http.get("https://api.github.com/users/hollislau/gists", {
            headers: headerAuth
          });
        }
      },
      update: function (model) {
        return $http.patch("https://api.github.com/gists/" + model.id, model.model, {
          headers: headerAuth
        });
      },
      create: function (model) {
        return $http.post("https://api.github.com/gists", model.model, {
          headers: headerAuth
        });
      },
      delete: function (model) {
        return $http.delete("https://api.github.com/gists/" + model.id, {
          headers: headerAuth
        });
      }
    };
    return Blog;
  }]);

})();
