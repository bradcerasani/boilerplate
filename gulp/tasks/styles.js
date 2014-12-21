var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var error = require('../lib/error');

gulp.task('styles', function() {
  return gulp.src('./src/assets/stylesheets/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())      
    .on('error', error)
    .pipe(sourcemaps.write())
    .pipe(prefix("last 2 version"))
    .pipe(gulp.dest('./build/assets/stylesheets'))
    .pipe(browserSync.reload({stream:true}));
});
