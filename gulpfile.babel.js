/**
 *
  This gulpfile uses Gulp 4. Composite tasks (i.e. tasks that call multiple sub-tasks) should be definied here and single purpose tasks defined in the tasks directory.
 *
 */

import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp/tasks', { recurse: true });

function watch() {
  gulp.watch(['src/**/*.handlebars', '!src/partials/**/*.handlebars'], gulp.task('changedTemplates'));
  gulp.watch(['src/partials/**/*.handlebars', 'src/**/*.json'], gulp.task('allTemplates'));
  gulp.watch('src/assets/scripts/**', gulp.task('scripts'));
  gulp.watch('src/assets/styles/**', gulp.task('styles'));
  gulp.watch(['src/assets/images/**', '!src/assets/images/icons/**'], gulp.task('images'));
  gulp.watch('src/assets/images/icons/**', gulp.task('icons'));
}

gulp.task(watch);

gulp.task('build',
  gulp.parallel('images', 'icons', 'allTemplates', 'styles', 'scripts')
);

gulp.task('default',
  gulp.parallel('serve', watch)
);
