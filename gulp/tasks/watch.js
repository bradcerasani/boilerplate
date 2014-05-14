var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  var server = livereload();

  var reload = function(file) {
    server.changed(file.path);
  };

  gulp.watch('src/assets/javascripts/**', ['scripts']);
  gulp.watch('src/assets/stylesheets/**', ['styles']);
  gulp.watch('src/assets/images/**', ['images']);
  // gulp.watch(['build/**']).on('change', reload);
});
