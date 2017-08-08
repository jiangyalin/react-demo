var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  entry: [
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true, // 激活服务器的HMR
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/',
    port: 8081,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      use: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'app')
      ]
    }, {
      test: /\.scss$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]'},
        {loader: 'sass-loader'}
      ],
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'app')
      ]
    }, {
      test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
      use: [
        {loader: 'url-loader?limit=10000'}
      ],
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'app')
      ]
    }, {
      test: /\.(png|jpg)$/,
      use: [
        {loader: 'url-loader?limit=25000'}
      ],
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'app')
      ]
    }]
  }
};

module.exports = config;