'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var koutoSwiss  = require('kouto-swiss');
var jeet        = require('jeet');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('styles', function () {

    var injectFiles = gulp.src([
      options.src + '/app/**/*.styl',
      '!' + options.src + '/app/styles/**/*.styl',
      '!' + options.src + '/app/index.styl',
      '!' + options.src + '/app/vendor.styl'
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src + '/app/', '');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    var indexFilter = $.filter('index.styl');
    var vendorFilter = $.filter('vendor.styl');

    var stylusOptions = {
      use: [koutoSwiss(), jeet()]
    };

    return gulp.src([
      options.src + '/app/index.styl',
      options.src + '/app/vendor.styl'
    ])
      .pipe(indexFilter)
      .pipe($.inject(injectFiles, injectOptions))
      .pipe(indexFilter.restore())
      .pipe(vendorFilter)
      .pipe(wiredep(options.wiredep))
      .pipe(vendorFilter.restore())
      .pipe($.sourcemaps.init())
      .pipe($.stylus(stylusOptions)).on('error', options.errorHandler('Stylus'))
      .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.tmp + '/serve/app/'))
      .pipe(browserSync.reload({ stream: true }));
  });
};
