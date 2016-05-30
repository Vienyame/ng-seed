(function() {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');
  var jshint = require('gulp-jshint');
  var stylish = require('jshint-stylish');

  var browserSync = require('browser-sync');

  gulp.task('jshint-reload', [], function() {
    hint();
    browserSync.reload();
  });

  gulp.task('jshint', function(){
    hint();
  });

  function hint(){
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter(stylish));
  }

})();