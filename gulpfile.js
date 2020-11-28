const { src, dest, watch } = require('gulp'),
  sass = require('gulp-sass'),
  fibers = require('fibers'),
  autoprefixer = require("gulp-autoprefixer");

sass.compiler = require('sass');
const taskSass = () =>
  src('./assets/scss/**/*.scss')
  .pipe(sass(
    { fiber: fibers }
  ))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(dest('./'));

// Wacth tasks
const taskWatch = (done) => {
  watch('assets/scss/**/*.scss', taskSass);
  done();
}

// Task run
exports.default = taskWatch;