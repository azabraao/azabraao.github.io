'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');
let rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var concat = require('gulp-concat');
var minify = require('gulp-minify');

sass.compiler = require('node-sass');
 
gulp.task('sass', async () => {
    gulp.src('./assets/scss/index.scss')
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

gulp.task('pack-js', function () {    
  return gulp.src(['assets/js/*.js'])
      .pipe(concat('bundle.js'))
      .pipe(minify())
      .pipe(gulp.dest('assets/js/dist'));
});

gulp.task('js:watch', async () => {
  gulp.watch('./assets/js/*.js', gulp.series(['pack-js']));
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
  gulp.watch('./assets/js/*.js', gulp.series(['pack-js']));
});

gulp.task('default', gulp.series(['watch']));