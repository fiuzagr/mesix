'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  function webpack(watch, callback) {
    var webpackOptions = {
      watch: watch,
      module: {
        preLoaders: [
          // TODO FIX jsxhint
          // {
          //   test: /\.jsx$/,
          //   exclude: /node_modules/,
          //   loader: 'jsxhint-loader'
          // },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'jshint-loader'
          }
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: [
              // 'traceur-loader',
              'babel-loader',
              'msx-loader?harmony&es6module'
            ]
          }
        ]
      },
      resolve: {
        root: path.normalize(__dirname + '/../src/app/'),
        modulesDirectories: [
          'pages',
          'components',
          'base',
          'models'
        ],
        extensions: ['', '.js', '.jsx']
      },
      output: { filename: 'index.js' }
    };

    if(watch) {
      webpackOptions.devtool = 'inline-source-map';
    }

    var webpackChangeHandler = function(err, stats) {
      if(err) {
        options.errorHandler('Webpack')(err);
      }
      $.util.log(stats.toString({
        colors: $.util.colors.supportsColor,
        chunks: false,
        hash: false,
        version: false
      }));
      browserSync.reload();
      if(watch) {
        watch = false;
        callback();
      }
    };

    return gulp.src(options.src + '/app/index.js')
      .pipe($.webpack(webpackOptions, null, webpackChangeHandler))
      .pipe(gulp.dest(options.tmp + '/serve/app'));
  }

  gulp.task('scripts', function () {
    return webpack(false);
  });

  gulp.task('scripts:watch', ['scripts'], function (callback) {
    return webpack(true, callback);
  });
};
