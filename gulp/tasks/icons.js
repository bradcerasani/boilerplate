import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import svgStore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';
import rename from 'gulp-rename';

const dest = './src/partials/';

function icons() {
  return gulp.src('src/assets/images/icons/*.svg')
    .pipe(imagemin())
    .pipe(svgStore({inlineSvg: true}))
    .pipe(cheerio({run: $ => $('svg').addClass('absolute none')}))
    .pipe(rename({extname: '.svg.hbs'}))
    .pipe(gulp.dest(dest));
}

gulp.task(icons);

