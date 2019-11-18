const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry : "./src/index.js",
  mode : "development",
  module : {
    rules : [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test : /\.(js|jsx)$/,
        loader : "babel-loader",
        options : { presets : ["@babel/env"] }
      },
      {
        test : /\.css$/,
        loader : ["style-loader","css-loader"],
      }
    ]
  },
  resolve : { extensions : ["*",".js",".jsx"]},
  output : {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devServer : {
    contentBase : path.resolve(__dirname, './dist'),
    port: 9000,
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname, "public/index.html")
    })
  ]
}