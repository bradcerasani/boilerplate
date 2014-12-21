var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var error = require('../lib/error');

var bundler = watchify(browserify('./src/assets/javascripts/main.js', watchify.args));

gulp.task('scripts', bundle);
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', error)
    .pipe(source('./bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/assets/javascripts'));    
}