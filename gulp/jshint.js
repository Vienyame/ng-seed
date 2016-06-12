(function() {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');
  //var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'run-sequence']
  });

  var browserSync = require('browser-sync');

  gulp.task('lint-reload', ['js-hint', 'es-hint', 'scss-lint'], function() {
    browserSync.reload();
  });

  gulp.task('js-hint', function(){
    hint();
  });
  gulp.task('es-hint', function(){
    eslint();
  });
  gulp.task('scss-lint', function(){
    scsslint();
  });

  gulp.task('lint', function(){
    return $.runSequence('js-hint', 'es-hint', 'scss-lint');
  });

  function hint(){
    return gulp.src(conf.paths.js)
      .pipe($.jshint('.jshintrc'))
      .pipe($.jshint.reporter(stylish));
  }

  function eslint(){
    return gulp.src(conf.paths.js)
      .pipe($.eslint('.eslintrc'))
      .pipe($.eslint({reset:true}))
      .pipe($.eslint.format());
  }

  function scsslint(){
    return gulp.src(conf.paths.scss)
      .pipe($.scssLint({config: '.scsslintrc.yml'}));
  }

})();