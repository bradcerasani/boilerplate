// Tasks are defined in ./gulp/tasks directory
'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');
var hub = new HubRegistry(['gulp/tasks/*.js']);

gulp.registry(hub);

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('html', 'images', 'styles', 'scripts')
));

// gulp.task('default', ['build', 'serve', 'watch']);

// gulp.task('watch', function() {
//   gulp.watch('src/**/*.html', ['html']);
//   gulp.watch('src/assets/javascripts/**', ['scripts']);
//   gulp.watch('src/assets/stylesheets/**', ['styles']);
//   gulp.watch('src/assets/images/**', ['images']);
// });