import gulp from 'gulp';
import postcss from 'gulp-postcss';
import atImport from 'postcss-import';
import csswring from 'csswring';
import customProperties from 'postcss-custom-properties';
import customSelectors from 'postcss-custom-selectors';
import customMedia from 'postcss-custom-media';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import size from 'gulp-size';

const reload = browserSync.reload;
const BROWSERS = [
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
  const processors = [
    atImport,
    customProperties,
    customSelectors,
    customMedia,
    autoprefixer({browsers: BROWSERS}),
    csswring,
  ];
  return gulp.src('./src/assets/styles/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/assets/styles'))
    .pipe(size({showFiles: true, gzip: true}))
    .pipe(reload({stream: true}));
}

gulp.task(styles);
