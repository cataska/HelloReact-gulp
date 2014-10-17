var gulp = require('gulp');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var react = require('gulp-react');
var browserify = require('gulp-browserify')

gulp.task('jsx', function() {
    return gulp.src('./*.jsx')
           .pipe(react())
           .pipe(gulp.dest('./'))
});

gulp.task('browserify', function() {
    return gulp.src('*.jsx')
           .pipe(browserify({
               transform: ["reactify"]
           }))

           .pipe(rename('bundle.js'))

           .pipe(gulp.dest('.'))
});

gulp.task('clean', function() {
    return gulp.src('bundle.js', {read: false})
           .pipe(clean())
});

gulp.task('default', ['clean', 'browserify']);
