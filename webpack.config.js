'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    application: './javascripts/application.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader', options: { presets: ['es2015'] } }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          ExtractTextPlugin.extract("css"),
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'js-[name].js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css-[name].css.liquid",
      allChunks: true,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('cssnano'),
          require('autoprefixer'),
        ],
      },
    }),
  ],
};
