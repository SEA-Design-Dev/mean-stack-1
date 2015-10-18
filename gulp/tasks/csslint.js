var gulp = require("gulp");
var config = require("../config").sass;
var csslint = require("gulp-csslint");

gulp.task("csslint", function () {
  return gulp.src(config.dest + "**/*.css")
    .pipe(csslint())
    .pipe(csslint.reporter());
});
