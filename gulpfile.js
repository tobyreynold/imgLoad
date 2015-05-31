var gulp = require('gulp');
var jshint = require('gulp-jshint');
var minifyCss = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
// var rename = require('gulp-rename');

gulp.task('js-min', function () {
    gulp.src('js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('jsdeploy'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('cssdeploy'));
});

gulp.task('default', ['minify-css','js-min']);