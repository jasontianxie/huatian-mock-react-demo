var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: './app.jsx',
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle111.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude:/node_modules/
        // query: {
        //   presets: ['es2015', 'react']
        // }
        
        // loaders:['babel-loader?presets[]=es2015&presets[]=react']
      }
    ]
  },
  
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'huatian-mock-react-demo',
      template:'./template.html',
      inject:false
    }),
    new webpack.optimize.UglifyJsPlugin({ //开发环境不设置压缩js，生产环境才压缩js
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': { // 这是给 React / Redux 打包用的
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};