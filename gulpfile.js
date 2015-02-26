var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");
var ngAnnotate = require("gulp-ng-annotate");
var sourcemaps = require("gulp-sourcemaps");
var nodemon = require("gulp-nodemon");
gulp.task('dev:server', function(){
    nodemon({
        script: "server.js",
        ext: "js",
        ignore: ["ng*", "gulp*", "assets*"]
    });
});
gulp.task("dev", ["watch:js","dev:server"]);
gulp.task("watch:js", ["js"], function(){
    gulp.watch("ng/**/*.js",["js"]);
});
gulp.task("js", function() {
    gulp.src(["ng/module.js","ng/**/*.js"])
        .pipe(sourcemaps.init())
            .pipe(concat("app.js"))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("assets"));
});
