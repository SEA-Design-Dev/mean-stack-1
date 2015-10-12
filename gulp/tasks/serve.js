var gulp = require("gulp");
var server = require("gulp-express");

gulp.task("serve", function () {
  server.run(["server.js"]);
  gulp.watch(["server.js"], [server.run]);
});
