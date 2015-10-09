var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').sass;

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
