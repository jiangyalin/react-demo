const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    path.resolve(__dirname, 'app/main.js') // 入口文件 根据此文件检查依赖
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口路径
    filename: 'bundle.js', // 输出文件名
    publicPath: '/'
  },
  devServer: {
    hot: true, // 激活服务器的HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 8081,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js?$/, // 用正则来匹配文件路径，这段意思是匹配 js
      use: 'babel-loader', // 加载模块 "babel-loader"
      exclude: /node_modules/, // 排除此路径下的文件
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
  },
  plugins: [
    new HtmlWebpackPlugin({ // 生成访问页面
      title: '开发模式',
      template: path.resolve(__dirname, 'src/js/index.html') // 页面模板
    })
  ]
};

module.exports = config;