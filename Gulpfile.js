var gulp = require("gulp"),
	sass = require('gulp-sass');


gulp.task('styles', function() {
	gulp.src("sass/**/*.scss")
	.pipe(sass({
	includePaths: require("node-bourbon").includePaths
	})
	.on("error", sass.logError))
	.pipe(gulp.dest("./public/css"));
});

gulp.task('watch', function() {
	gulp.watch("sass/**/*.scss", ["styles"]);
	gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(express.static(__dirname + "/public"));
	app.listen(8000, '127.0.0.1');
});

gulp.task('serve', ['styles', 'express', 'watch'], function() {
	
});