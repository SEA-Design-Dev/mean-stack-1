var gulp = require("gulp");
var sass = require("gulp-sass");
var webpack = require("webpack-stream");

gulp.task("sass", function() {
  gulp.src("sass/**/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("public/css/"));
});

gulp.task('webpack', function(callback) {
  return gulp.src("js/**/*.js")
  .pipe(webpack({
    output: {
      filename: "main.js"
    }
  }))
  .pipe(gulp.dest('./public/js/'));
});

gulp.task("default", ["sass", "webpack"], function() {
  gulp.watch("sass/**/*.scss", ["sass"]);
  gulp.watch("js/**/*.js", ["webpack"]);
});


