var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

var useref= require('gulp-useref');
var uglify= require('gulp-uglify');
var gulpIf= require('gulp-if');


var gulpCache= require('gulp-cache');
//static server
gulp.task('browser-sync',function(){
    browserSync.init({
        server: {
            baseDir: ['./','./src']
        }
    });
});

gulp.task('reload',function(){
    return gulp.src('./src/css/style.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch',function(){
    gulp.watch('./src/css/**/*.scss',['reload']);

});
gulp.task('default', function(cb){
//code here
runSequence(['browser-sync','watch'],cb);

});


