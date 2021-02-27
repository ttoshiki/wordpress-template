// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename   = require("gulp-rename");
const packageImporter = require('node-sass-package-importer');

const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

gulp.task("imagemin", function () {
  return gulp.watch(
    './assets/images/**',
    function() {
        return gulp
            .src('./assets/images/**')
            .pipe(changed('./dist/assets/images/**'))
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
            .pipe(gulp.dest('./dist/assets/images'))
        });
    });

gulp.task("watch-scss", function() {
    return gulp.watch(
        "./assets/scss/*.scss",
        function() {
            // style.scssの更新があった場合の処理
            return (
                gulp
                    .src("./assets/scss/*.scss")
                    // Sassのコンパイルを実行
                    .pipe(
                        sass({
                            outputStyle: "expanded"
                        })
                            // Sassのコンパイルエラーを表示
                            // (これがないと自動的に止まってしまう)
                            .on("error", sass.logError)
                    )
                    // cssフォルダー以下に保存
                    .pipe(gulp.dest("./"))
                    .pipe(cleanCSS())
                    .pipe(rename({
                        extname: '.min.css'
                    }))
                    .pipe(gulp.dest('./'))
            );
        })
})

gulp.task('default', gulp.parallel('watch-scss', 'imagemin'));
