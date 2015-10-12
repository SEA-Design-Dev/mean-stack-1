var gulp = require("gulp");
var config = require("../config").javascript;
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");

gulp.task("jshint", function () {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
