//Include gulp
var gulp = require('gulp');

//Include plugins
var jshint = reqire('gulp-jshint');
var sass = require('gulp-sass');
var contact = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Lint Task
gulp.task('lint', function() {
    return gulp.src('client/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    
});

//Compile Sass
gulp.task('sass', function() {
    return gulp.src('client/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('client/css'));
});

gulp.task('scripts', function() {
    return gulp.src('client/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('client/js/*.js', ['lint', 'scripts']);
    gulp.watch('client/scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);