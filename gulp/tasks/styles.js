var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var TARGET_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task(styles);

function styles() {
  return gulp.src('./src/assets/stylesheets/main.scss')
    .pipe(sourcemaps.init())
    .pipe(changed('styles', {extension: '.scss'}))
    .pipe(sass({
      precision: 10,
      errLogToConsole: true
    }))
    .pipe(prefix({browsers: TARGET_BROWSERS}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/assets/stylesheets'))
    .pipe(reload({stream:true}));
}