const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/, // 用正则来匹配文件路径，这段意思是匹配 js
      use: 'babel-loader', // 加载模块 "babel-loader"
      exclude: /node_modules/ // 排除此路径下的文件
    }]
  }
};