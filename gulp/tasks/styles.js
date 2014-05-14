var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var error = require('../lib/error');

gulp.task('styles', function() {
  return gulp.src('./src/assets/stylesheets/*.scss')
    .pipe(sass())
    .on('error', error)
    .pipe(prefix("last 2 version"))
    .pipe(gulp.dest('./build/assets/stylesheets'))
    .pipe(livereload())
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/assets/stylesheets'));
});
