var sass         = require('gulp-sass');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.on('error', handleErrors)
    .pipe(gulp.dest('./build/stylesheets'));
});
