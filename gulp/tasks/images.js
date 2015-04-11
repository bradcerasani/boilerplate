var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var dest = './dist/assets/images';

function images() {
  return gulp.src('./src/assets/images/**')
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
}

gulp.task(images);