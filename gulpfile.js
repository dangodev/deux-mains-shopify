'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var zip = require('gulp-zip');

gulp.task('export', function() {
  gulp.src('./assets/stylesheets/application.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 5%'],
      cascade: false
    }))
    .pipe(minifyCss())
    .pipe(rename(function(path) {
      path.basename = 'css-' + path.basename;
      path.extname += '.liquid';
    }))
    .pipe(gulp.dest('./assets'));

  gulp.src('assets/javascripts/*.js')
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename = 'js-' + path.basename;
    }))
    .pipe(gulp.dest('./assets'));

  // Delete the Zip task below to skip generating a *.zip file on export
  // ----- Zip task begin ----- //
  gulp.src(['**', '!gulpfile.js', '!README.md', '!node_modules/**', '!assets/javascripts/**', '!assets/stylesheets/**'])
    .pipe(zip('deux-main-shopify.zip'))
    .pipe(gulp.dest('../'));
  // ----- Zip task end ----- //
});

gulp.task('default', ['export']);
