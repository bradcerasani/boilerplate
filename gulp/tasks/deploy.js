import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

const options = {message: 'Updated ' + new Date()};

function deploy() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages(options));
}

gulp.task(deploy);
