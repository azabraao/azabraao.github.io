'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');
let rename = require("gulp-rename");

sass.compiler = require('node-sass');
 
gulp.task('sass', async () => {
    gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('css', async () => {
  gulp.src('./assets/css/index.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest('./assets/css'));
}); 

gulp.task('css:watch', async () => {
  gulp.watch('./assets/css/index.css', gulp.series(['css']))
});

gulp.task('sass:watch', async () => {
  gulp.watch('./assets/scss/**/*.scss', gulp.series(['sass']));
});

gulp.task('watch', async () => {
  gulp.watch('./assets/scss/**/*.scss', gulp.series(['sass']));
  gulp.watch('./assets/css/index.css', gulp.series(['css']));
});

gulp.task('default', gulp.series(['watch']));