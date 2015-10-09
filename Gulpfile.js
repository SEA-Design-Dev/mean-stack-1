// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var run = require("gulp-run");

// gulp.task("sass", function() {
//   gulp.src("sass/**/*.scss")
//     .pipe(sass({
//       includePaths: require("node-bourbon").includePaths
//     })
//       .on("error", sass.logError))
//     .pipe(gulp.dest("./css"));
// });

// gulp.task('watch', function() {
// 	gulp.watch("sass/**/*.scss", ["sass"]);
// 	gulp.watch("sass/*.scss", ["sass"]);
// });

// gulp.task("default", ["sass", "watch"], function() {
// });

// gulp.task("express", function() {
//  run("node server.js").exec().pipe(gulp.dest("output"));
// });

// gulp.task("serve", ["sass", "express", "watch"], function() {

// });




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
