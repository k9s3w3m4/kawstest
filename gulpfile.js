var gulp = require('gulp');
var mocha = require('gulp-mocha');


gulp.task('v4', function() {
	require('./config/endpoints')('v4');
	runTest();
});

gulp.task('v3', function() {
	require('./config/endpoints')('v3');
	runTest();
});
gulp.task('online', function() {
	require('./config/endpoints')('online');
	runTest();
});
function runTest() {
	return gulp
		.src(['test/*.js','test1/*.js'], { read: false})
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
}
