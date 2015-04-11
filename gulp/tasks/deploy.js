var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var options = {
  message: "Updated " + new Date()
};

function deploy() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages(options));
}

gulp.task(deploy);