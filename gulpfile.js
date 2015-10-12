/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var webpack = require("webpack-stream");

// gulp.task("sass", function() {
//   return gulp.src("src/sass/**/*.scss")
//   .pipe(sass().on("error", sass.logError))
//   .pipe(gulp.dest("public/css/"));
// });

// gulp.task('webpack', function() {
//   return gulp.src("src/app/**/*.js")
//   .pipe(webpack({
//     output: {
//       filename: "main.js"
//     }
//   }))
//   .pipe(gulp.dest('public/js/'));
// });

// gulp.task("default", ["sass", "webpack"], function() {
//   gulp.watch("src/sass/**/*.scss", ["sass"]);
//   gulp.watch("src/app/**/*.js", ["webpack"]);
// });


