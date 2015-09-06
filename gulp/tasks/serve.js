import gulp from 'gulp';
import browserSync from 'browser-sync';

browserSync.create();

function serve() {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: './dist',
    },
  });
}

gulp.task(serve);
