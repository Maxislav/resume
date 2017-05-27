const  pug = require('gulp-pug'),
livereload = require('gulp-livereload'),
merge = require('merge-stream'),
plumber = require('gulp-plumber-notifier')

module.exports = function (gulp) {

	gulp.task('pug:dev', function buildHTML() {
		return gulp
			.src(['module/**/*.pug'])
			.pipe(pug({
				pretty: true
			}))
			.pipe(gulp.dest('./module'))
			.pipe(livereload())

	});

};
