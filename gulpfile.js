let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),

//****************************************************
// style css
//****************************************************
gulp.task('style', function () {
    return gulp.src('./assets/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('./dist/css'));
});
//****************************************************
//task for automate all styles
//****************************************************
gulp.task('styles', gulp.parallel(['style']))

//****************************************************
//task for watching file
//****************************************************
gulp.task('watch', function () {
    gulp.watch('./assets/scss/*.scss', gulp.series('styles'));
});