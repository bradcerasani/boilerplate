import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import prefix from 'gulp-autoprefixer';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';
import size from 'gulp-size';
import handleErrors from '../lib/error';

const reload = browserSync.reload;
const TARGET_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10',
];

function styles() {
  return gulp.src('./src/assets/stylesheets/main.scss')
    .pipe(sourcemaps.init())
    .pipe(changed('styles', {extension: '.scss'}))
    .pipe(sass({
      precision: 10,
      errLogToConsole: false,
    }))
    .on('error', handleErrors)
    .pipe(prefix({browsers: TARGET_BROWSERS}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/stylesheets'))
    .pipe(size({showFiles: true}))
    .pipe(reload({stream: true}));
}

gulp.task(styles);
