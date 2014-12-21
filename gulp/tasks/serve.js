var gulp = require("gulp");
var browserSync = require('browser-sync');

var options = {
  xip: true,
  notify: false,
  logPrefix: "BrowserSync",
  server: {
    baseDir: "./build"
  }
}

gulp.task('serve', function() {
  browserSync.init(['build/**'], options);
});
