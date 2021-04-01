// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-dart-sass");
sass.compiler = require('sass');

const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("imagemin", function () {
    return gulp
        .src('./assets/images/**')
        .pipe(changed('./dist/images/**'))
        .pipe(
            imagemin([
                pngquant({
                    quality: [.60, .70], // 画質
                    speed: 1 // スピード
                }),
                mozjpeg({ quality: 65 }), // 画質
                imagemin.svgo(),
                imagemin.optipng(),
                imagemin.gifsicle({ optimizationLevel: 3 }) // 圧縮率
            ])
        )
        .pipe(gulp.dest('./dist/images'))
    });

gulp.task("watch-scss", function() {
    return gulp.watch(
        "./assets/scss/**/*.scss",
        function() {
            // style.scssの更新があった場合の処理
            return (
                gulp
                    .src("./assets/scss/**/*.scss")
                    // Sassのコンパイルを実行
                    .pipe(sass.sync().on('error', sass.logError))
                    .pipe(cleanCSS())
                    .pipe(rename({
                        extname: '.min.css'
                    }))
                    .pipe(gulp.dest('./'))
            );
        })
})

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/*.scss', ['sass']);
});

gulp.task('default', gulp.parallel('watch-scss', 'imagemin'));
