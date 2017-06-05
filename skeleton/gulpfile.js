const c = require("./.kart/config");

const gulp = require("gulp");
const shell = require("gulp-shell");
const livereload = require("gulp-livereload");

gulp.task("html", shell.task([ c.C.html ]));
gulp.task("sass", shell.task([ c.C.sass ]));
gulp.task("temp", shell.task([ c.C.temp ]));
gulp.task("js", shell.task([ c.C.js ]));
gulp.task("all", shell.task( [c.C.all] ));

gulp.task("html-w", shell.task([ c.C.w.html ]));
gulp.task("sass-w", shell.task([ c.C.w.sass ]));
gulp.task("temp-w", () => {
	gulp.watch(`${c.I.TEMP}/**`, ["temp"]);
});
gulp.task("js-w", shell.task([ c.C.w.js ]));

gulp.task( "default", ["all"] );
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// livereload
gulp.task("live-html", () => {
	gulp.src(c.O.HTML)
		.pipe( livereload() );
});
gulp.task("live-css", () => {
	gulp.src(`${c.O.CSS}**/*.css`)
		.pipe( livereload() );
});
gulp.task("live-js", () => {
	gulp.src(`${c.O.JS}**/*.js`)
		.pipe( livereload() );
});
gulp.task("livereload", () => {
	livereload.listen();
	
	gulp.watch(c.O.HTML, ["live-html"]);
	gulp.watch(`${c.O.CSS}**/*`, ["live-css"]);
	gulp.watch(`${c.O.JS}**/*`, ["live-js"]);
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@