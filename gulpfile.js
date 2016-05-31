var gulp = require('gulp');
var umd = require('gulp-umd');

gulp.task('umd', function() {
  return gulp.src('src/*.js')
    .pipe(umd())
    .pipe(gulp.dest('build'));
});
