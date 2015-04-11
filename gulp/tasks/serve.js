var gulp = require("gulp");
var browserSync = require('browser-sync');

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

gulp.task(serve);
