var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var brify = browserify({
    entries: ['./src/app'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
});

function bundle() {
    return brify.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build'));
}

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

gulp.task('watch', function() {
    brify.on('update', bundle);
    return bundle();
});

