var gulp         = require('gulp');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var handleErrors = require('../util/handleErrors');

gulp.task('scripts', function(){
	return browserify({
			entries: ['./src/javascripts/main.js']
			// extensions: ['.coffee', '.hbs']
		})
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./build/assets/javascripts'));
});
