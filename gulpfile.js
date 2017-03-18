let gulp = require("gulp");
let typescript = require("gulp-typescript");
let ngAnnotate = require("gulp-ng-annotate");
let sourcemaps = require("gulp-sourcemaps");
let runSequence = require("run-sequence");
let serve = require('gulp-serve');

gulp.task("go", function(cb) { 
    return runSequence(["build", "copy-index"], "serve", cb);
})

gulp.task('serve', serve("dist"));

gulp.task('build', function () {
    let tsConfigPath = __dirname + '/tsconfig.json';
    let tsProject = typescript.createProject(tsConfigPath, {
        typescript: require('typescript'),
        declaration: true
    });

    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(ngAnnotate())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./dist"));
});

gulp.task('copy-index', function() {
    gulp.src(['src/index.html', "node_modules/angular/angular.js"])
        .pipe(gulp.dest('./dist'));
});