var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('test', function() {
    return gulp.src('test/*.js')
        .pipe(mocha())
        .on('error', function(err) {
            this.emit('end');
        });
});

gulp.task('default', function() {
    return browserify('./src/app')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build'));
});

