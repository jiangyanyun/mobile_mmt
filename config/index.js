'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path'),
      url=require('url');

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/':{
      //     target:'http://ydmmt.hc360.com/mobilemmt',
      //     changeOrigin:true,
      //     pathRewrite:{
      //       '^/':'/'
      //     }
      //  }
        // '/manager':{
        //   target:'http://localhost:8080',
        //   secure:false,//默认情况下，不接受运行在 HTTPS 上，如果想代理https，需要配置此参数
        //   changeOrigin:true,
        //   pathRewrite: function(path, req) {
        //     var urlParsed = url.parse(req.url, true),
        //         query = urlParsed.query,
        //         pathname = urlParsed.pathname.replace(/\/*$/g,'');
        //     pathname = pathname.substring(pathname.lastIndexOf('/'));
        //     return '/static/json' + pathname + '.json'
        //     // Object.keys(query).forEach((key) => {
        //     //     pathname += ('-' + key + query[key]);
        //     // });
        //     // pathname = '/static/json' + pathname + '.json';
        //     // console.log('proxy request ' + path + ' to ' + pathname);
        //     // return pathname;
        // }
        // },
        // '/api':{
        //   target:'https://mlogin.hc360.com',
        //   changeOrigin:true,
        //   pathRewrite: {
        //     '^/api': ''
        //   }
        // }

    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: '8080', // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    //正式环境路径
    assetsPublicPath: '//ydmmt.hc360.com/mobilemmt/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
