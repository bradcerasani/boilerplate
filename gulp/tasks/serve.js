var gulp = require("gulp");
var browserSync = require('browser-sync');

gulp.task(serve);

function serve() {
  browserSync({
    notify: false,
    open: false,
    logPrefix: "BrowserSync",
    server: {
      baseDir: "./dist"
    }
  });
}