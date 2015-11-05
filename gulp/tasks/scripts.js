import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watchify from 'watchify';
import babelify from 'babelify';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import size from 'gulp-size';
import error from '../lib/error';

const reload = browserSync.reload;
const bundler = watchify(browserify('./src/assets/scripts/main.js', watchify.args));

function bundle() {
  return bundler
    .transform(babelify)
    .bundle()
    .on('error', error)
    .pipe(source('./bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/assets/scripts'))
    .pipe(size({showFiles: true}))
    .pipe(reload({stream: true}));
}

gulp.task('scripts', bundle);
bundler.on('update', bundle);
