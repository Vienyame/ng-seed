(function(){
  'use strict';


  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');
  var gulpDocs = require('gulp-ngdocs');

  var $ = require('gulp-load-plugins')();

  var wiredep = require('wiredep').stream;
  var _ = require('lodash');

  var browserSync = require('browser-sync');

  var docsOptions = {
    scripts: [
      '../app.min.js'
    ],
    html5Mode: true,
    startPage: '/api',
    title: "ng-seed documentation",
    image: "path/to/my/image.png",
    imageLink: "http://my-domain.com",
    titleLink: "/api"
  };

  gulp.task('doc-reload', ['doc'], function() {
    browserSync.reload();
  });

  gulp.task('doc', function() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
      .pipe($.ngdocs.process(docsOptions))
      .pipe(gulp.dest('./docs'));
  });

})();