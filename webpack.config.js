const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
var path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      }
    ]
  },

  devServer: {
    port: 3000
  },

  plugins: [htmlPlugin]
};
