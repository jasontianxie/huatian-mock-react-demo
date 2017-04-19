var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
let plugins=[];
let extractCSS = new ExtractTextPlugin('css/[name].css'); //分离css文件

let HtmlwebpackPluginVar=  new HtmlwebpackPlugin({ //自动生成html文件
      title: 'huatian-mock-react-demo',
      template:'./template.html',
      inject:false
    });
let cssCompressPlugin = new OptimizeCssAssetsPlugin({ //开发环境,不设置压缩css，生产环境才压缩css
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    });
let jsCompressPlugin = new webpack.optimize.UglifyJsPlugin({ //开发环境,不设置压缩js，生产环境才压缩js
      compress: {
        warnings: false
      }
    });
let globalVar = new webpack.DefinePlugin({
      'process.env': { //这是为了提升性能。
        NODE_ENV: JSON.stringify('production')
      },
    __DEV__: process.env.NODE_ENV.trim() === 'development',
    __PROD__: process.env.NODE_ENV.trim() === 'production'
    })

// let autoprefixer = require('autoprefixer');

if(process.env.NODE_ENV === 'development'){//开发环境
  plugins.push(HtmlwebpackPluginVar);
  plugins.push(extractCSS);
  plugins.push(globalVar); 
  // plugins.push(new webpack.HotModuleReplacementPlugin());
}else{//生产环境
  plugins.push(globalVar);
  plugins.push(HtmlwebpackPluginVar);
  plugins.push(extractCSS);
  plugins.push(cssCompressPlugin);
  plugins.push(jsCompressPlugin);
}


const config = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: './app.jsx',
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    publicPath: 'http://127.0.0.1:9000/build/',
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
      },
      {
        test: /\.scss$/,
       	// loaders: ['style-loader', 'css-loader', 'sass-loader']
        loader: extractCSS.extract(['css-loader?sourcemap','postcss-loader','sass-loader'])
      }
    ]
  },
  //添加我们的插件
  plugins,
  devServer:{
    inline:true,
    // hot:true,
    port:9000,
    historyApiFallback: true
  }
};


if(process.env.NODE_ENV === 'development'){//开发环境
  config.devtool = "eval-source-map";//增加source-map
  // config.devServer = {
  //   colors: true,
  //   port:9000
  // }
}

module.exports = config;