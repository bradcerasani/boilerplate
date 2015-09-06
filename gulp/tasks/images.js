import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';

const dest = './dist/assets/images';

function images() {
  return gulp.src(['src/assets/images/**', '!src/assets/images/icons/**'])
    .pipe(changed(dest))
    .pipe(imagemin())
    .pipe(gulp.dest(dest));
}

gulp.task(images);
