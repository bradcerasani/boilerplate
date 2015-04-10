var gulp = require('gulp');
var del = require('del');

function clean() {
  del(['dist']);
}

gulp.task(clean);