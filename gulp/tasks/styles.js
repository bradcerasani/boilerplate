var gulp         = require('gulp');
var sass         = require('gulp-sass');
var prefix       = require('gulp-autoprefixer');
var csso         = require('gulp-csso');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
	return gulp.src('./src/stylesheets/*.scss')
		.pipe(sass())
    .pipe(prefix("last 2 version"))
    .pipe(csso())
		.on('error', handleErrors)
    .pipe(gulp.dest('./build/assets/stylesheets'));
});
