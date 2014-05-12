var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var error = require('../lib/error');

gulp.task('scripts', function(){
	return browserify({
			entries: ['./src/javascripts/main.js']
			// extensions: ['.coffee', '.hbs']
		})
		.bundle({debug: false})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build/assets/javascripts'))
    .pipe(streamify(uglify()))
    .pipe(rename({suffix: '.min'}))
    .on('error', error)
		.pipe(gulp.dest('./build/assets/javascripts'));
});
