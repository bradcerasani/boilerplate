var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/assets/javascripts/**', ['scripts']);
  gulp.watch('src/assets/stylesheets/**', ['styles']);
  gulp.watch('src/assets/images/**', ['images']);
});
