var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var error = require('../lib/error');

gulp.task('styles', function() {
  return gulp.src('./src/stylesheets/*.scss')
    .pipe(sass())
    .pipe(prefix("last 2 version"))
    .pipe(gulp.dest('./build/assets/stylesheets'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .on('error', error)
    .pipe(gulp.dest('./build/assets/stylesheets'));
});
