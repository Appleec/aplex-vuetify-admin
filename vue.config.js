'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const name = 'vuetify-admin' // page title
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = 7000 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      // [process.env.VUE_APP_BASE_API]: {
      //   target: `http://127.0.0.1:${port}/mock`,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     ['^' + process.env.VUE_APP_BASE_API]: ''
      //   }
      // },
      '/MOCK-API': {
        target: `http://127.0.0.1:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          '^/MOCK-API': ''
        }
      }
    }
    // after: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      /**
       * log: 201906041441 add --apple
       * compress dir to .zip/.tar/.tar.gz
       * npm install filemanager-webpack-plugin -D
       * const FileManagerPlugin = require('filemanager-webpack-plugin')
       * npm run build
       */
      // new FileManagerPlugin({
      //   onEnd: {
      //     delete: ['dist.tar.gz'],
      //     archive: [
      //       {
      //         source: 'dist',
      //         destination: 'dist.tar.gz'
      //       }
      //     ]
      //   }
      // })
    ],
    // Performance tips for webpack
    performance: {
      hints: false
      // hints:'warning',
      // Maximum volume of entry starting point
      // maxEntrypointSize: 50000000,
      // Maximum size of generated file
      // maxAssetSize: 30000000,
      // Only performance hints for js files are given
      // assetFilter: function(assetFilename) {
      //   return assetFilename.endsWith('.js');
      // }
    }

    // build output add TimeStamp
    // output: {
    //   filename: `[name].${new Date().getTime()}.js`,
    //   chunkFilename: `[name].${new Date().getTime()}.js`
    // }
  }
}
