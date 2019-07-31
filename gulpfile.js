'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let uglifycss = require('gulp-uglifycss');
let rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat-js");

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

gulp.task("build", function () {
  return gulp.src(["./assets/js/*.js"])
      .pipe(sourcemaps.init())
        .pipe(concat({
            "target": "concatenated.js", // Name to concatenate to
            "entry": "./main.js" // Entrypoint for the application, main module
                                 // The `./` part is important! The path is relative to
                                 // whatever gulp decides is the base-path, in this
                                 // example that is `./lib`
        }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("./assets/dist-js"));
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