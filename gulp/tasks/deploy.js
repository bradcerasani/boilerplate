var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var options = {
  message: "Updated " + new Date()
};

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages(options));
});