const gulp = require('gulp');
const server = require('browser-sync').create();

gulp.task('greeting', (cb) => {
	console.log("Hello there, I'm a script!");
	cb();
});

gulp.task('build', (cb) => {
	console.log('Building website...');
	setTimeout(() => {
		cb();
	}, 3000);
});

gulp.task('serve', () => {
	server.init({
		server: './dist',
		port: 3000,
	});

	gulp.watch('./dist/*.html').on('change', () => {
		server.reload();
		console.log('Html files from dist folder were changed.');
	});
});

gulp.task('default', gulp.series('build', 'serve'));
