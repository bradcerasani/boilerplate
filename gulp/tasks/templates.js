import gulp from 'gulp';
import rename from 'gulp-rename';
import handlebars from 'gulp-compile-handlebars';
import changed from 'gulp-changed';
import lazypipe from 'lazypipe';
import browserSync from 'browser-sync';

const reload = browserSync.reload;
const config = {base: '/'};
const options = {batch: ['./src/partials']};
const dest = './dist';

const compile = lazypipe()
  .pipe(handlebars, config, options)
  .pipe(rename, {extname: '.html'})
  .pipe(gulp.dest, dest)
  .pipe(reload, {stream: true});

function changedTemplates() {
  return gulp.src(['src/**/*.handlebars', '!src/partials/**/*.handlebars'])
    .pipe(changed(dest, {extension: '.html'}))
    .pipe(compile());
}

function allTemplates() {
  return gulp.src(['src/**/*.handlebars', '!src/partials/**/*.handlebars'])
    .pipe(compile());
}

gulp.task(changedTemplates);
gulp.task(allTemplates);
