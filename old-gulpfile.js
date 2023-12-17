const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');



function compileSass() {
  return gulp.src('./assets/sass/style.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/')) // 
    
}

function watch() {
  gulp.watch('./assets/sass/style.scss', compileSass);
}

exports.compileSass = compileSass;
exports.watch = watch;