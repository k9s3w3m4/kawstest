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

function runTest() {
	return gulp
		.src(['test/test-demo.js'], { read: false})
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
}
