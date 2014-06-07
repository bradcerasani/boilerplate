var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../lib/bundleLogger');
var source = require('vinyl-source-stream');
var error = require('../lib/error');

gulp.task('scripts', function() {
  var bundleMethod = global.isWatching ? watchify : browserify;
  var bundler = bundleMethod({
      entries: ['./src/assets/javascripts/main.js']
  });

  var bundle = function() {
    bundleLogger.start();

    return bundler
      .bundle({debug: false})
      .on('error', error)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./build/assets/javascripts'))
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler.on('update', bundle);
  }

  return bundle();
});
