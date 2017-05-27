/**
 * Created by mars on 6/22/16.
 */
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const sources = require('./src-url')

module.exports = function (gulp) {
  "use strict";
  let timer;
  gulp.task('watch:dev', function () {
    livereload.listen();

    gulp.watch(sources.pug,
      ['pug:dev']);

    //gulp.watch()

   /* gulp.watch(sources.stylus,
      ['stylus:dev']);

    gulp.watch(sources.js).on('change', function () {
      var reload_args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
       livereload.changed.apply(null, reload_args);
      }, 100);
    });
*/
    gulp.task('connect', function() {
        connect.server({
            livereload: true
        });
    });
  });
};
