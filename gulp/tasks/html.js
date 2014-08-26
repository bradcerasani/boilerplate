var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('html', function() {
  return gulp.src('./src/*.html', '!src/partials/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({stream:true}));
});
