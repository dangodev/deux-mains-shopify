'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('./assets/stylesheets/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(rename(function(path) {
      path.basename = 'css-' + path.basename;
    }))
    .pipe(gulp.dest('./assets'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/stylesheets/**/*.sass', ['sass']);
});

gulp.task('minify-css', function() {
  return gulp.src('assets/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
  return gulp.src('assets/javascripts/*.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename = 'js-' + path.basename;
    }))
    .pipe(gulp.dest('./assets'));
});

gulp.task('default', ['sass', 'uglify']);
