const gulp = require('gulp');
const babel = require('gulp-babel');

var jsx = require('gulp-jsx');

gulp.task('default', () => {
    return gulp.src('app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  return gulp.src('components/**/*.js')
    .pipe(jsx({
      factory: 'React.createClass'
    }))
    .pipe(gulp.dest('dist'));
});
