const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Fiber = require('fibers')
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: './src',

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          // CSSファイルを書き出すオプションを有効にする
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
              implementation: require('sass'),
              fiber: Fiber
            },
          },
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "../style.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images', to: 'images',
          noErrorOnMissing: true
        },
      ],
    }),
    new ImageminWebpWebpackPlugin(),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '65-80'
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 1,
        colors: 256
      },
      svgo: {
      },
      plugins: [
        ImageminMozjpeg({
          quality: 85,
          progressive: true
        })
      ]
    })
  ],
};