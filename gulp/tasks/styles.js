var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var error = require('../lib/error');

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

gulp.task('styles', function() {
  return gulp.src('./src/assets/stylesheets/main.scss')
    .pipe(changed('styles', {extension: '.scss'}))
    .pipe(sourcemaps.init())
    .pipe(sass({precision: 10}))      
    .on('error', error)
    .pipe(sourcemaps.write())
    .pipe(prefix({browsers: TARGET_BROWSERS}))
    .pipe(gulp.dest('./dist/assets/stylesheets'))
    .pipe(browserSync.reload({stream:true}));
});
