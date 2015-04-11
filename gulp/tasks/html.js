var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');

function html() {
  gulp.src(['src/**/*.html', '!src/partials/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream:true}));
}

gulp.task(html);