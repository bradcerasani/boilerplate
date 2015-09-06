import gulp from 'gulp';
import del from 'del';

function clean() {
  del(['dist']);
}

gulp.task(clean);
