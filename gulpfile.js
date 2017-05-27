/**
 * Created by maxislav on 09.07.16.
 */
var gulp = require('gulp'),
  gulpSync = require('gulp-sync')(gulp).sync;

const  devSyncTask =[
  //'inject:dev',
  'pug:dev',
  //'stylus:dev',
  'watch:dev'
];


require('./gulp/pug')(gulp);

require('./gulp/watch')(gulp);
/*
require('./gulp/stylus')(gulp);
require('./gulp/inject')(gulp);
require('./gulp/rename')(gulp);
*/





gulp.task('default', gulpSync(devSyncTask));
