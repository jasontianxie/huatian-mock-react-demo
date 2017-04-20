var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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
    });
let myproxy=new BrowserSyncPlugin({
    host: 'localhost',
    port: 9000,
    proxy: 'http://127.0.0.1:9002/', // 这里的proxy和webpack-dev-server中的proxy作用不一样，这里的proxy表示本地已经有一个server了，所以要代理一下（看有道笔记中关于browser-sync的文章），webpack-dev-server中的proxy是用来解决跨域问题的。
    logConnections: false,
    notify: false
  }, {
    reload: false
  });
// let autoprefixer = require('autoprefixer');

if(process.env.NODE_ENV === 'development'){//开发环境
  plugins.push(HtmlwebpackPluginVar);
  // plugins.push(extractCSS);开发环境下不分离css
  plugins.push(globalVar);
  plugins.push(myproxy); 
  plugins.push(new webpack.HotModuleReplacementPlugin());
}else{//生产环境
  plugins.push(globalVar);
  plugins.push(HtmlwebpackPluginVar);
  plugins.push(extractCSS);
  plugins.push(cssCompressPlugin);
  plugins.push(jsCompressPlugin);
}


const config = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: [
  //'eventsource-polyfill',//这个模块网上说是为了热加载时兼容ie，具体功能没有实践过
  'webpack-hot-middleware/client?reload=true',//这里 reload=true 的意思是，如果碰到不能hot reload的情况，就整页刷新。
  'webpack/hot/only-dev-server',//官网上好像建议去掉这个选项，并使用reload=true代替https://www.npmjs.com/package/webpack-hot-middleware
  './app.jsx'
],
// entry:'./app.jsx',
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
         //开发模式要内联，这样才能支持热替换，生产模式下把css分离
        loader:(process.env.NODE_ENV === 'production')?extractCSS.extract(['css-loader?sourcemap','postcss-loader','sass-loader']):'style-loader!css-loader!sass-loader'
      }
    ]
  },
  //添加我们的插件
  plugins
};


if(process.env.NODE_ENV === 'development'){//开发环境
  config.devtool = "eval-source-map";//增加source-map
  // config.devServer = {
  //   colors: true,
  //   port:9000
  // }
}

module.exports = config;