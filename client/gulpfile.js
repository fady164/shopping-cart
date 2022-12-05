//top level function [task - src - dest - watch]

// task ==> do task or function
// src ==> 22dr ashof file mo3in
// dest ( destination) ==> ybos mn al src w yohoto 3n tari2 al dest
// watch ==> ay taghiir yshofo dynamic

const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

gulp.task("sass", async () => {
   gulp.src("src/components/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"));
});
