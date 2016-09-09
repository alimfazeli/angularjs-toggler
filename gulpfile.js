var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourceMaps = require('gulp-sourcemaps');

gulp.task('default', function() {
	
	return gulp.src(['src/module.js', 'src/directives.js', 'src/service.js'])
		.pipe(sourceMaps.init())
		.pipe(concat('angularjs-toggler.min.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
})
