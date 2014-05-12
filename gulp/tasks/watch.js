var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  var server = livereload();

  var reload = function(file) {
    server.changed(file.path);
  };

  gulp.watch('src/javascripts/**', ['scripts']);
  gulp.watch('src/stylesheets/**', ['styles']);
  gulp.watch('src/images/**', ['images']);
  gulp.watch(['build/**']).on('change', reload);
});
