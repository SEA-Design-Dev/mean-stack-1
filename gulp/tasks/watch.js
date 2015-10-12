var gulp = require("gulp");
var config = require("../config");

gulp.task('watch', function() {
  gulp.watch(config.html.src, ["html"]);
  gulp.watch(config.javascript.src, ["webpack", "jshint"]);
  gulp.watch(config.sass.src, ["sass"]);
  gulp.watch(config.sass.dest + "**/*.css", ["csslint"]);
});
