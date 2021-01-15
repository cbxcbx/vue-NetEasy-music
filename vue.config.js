const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        api: resolve('src/api'),
        base: resolve('src/base'),
        assets: resolve('src/assets'),
        common: resolve('src/common'),
        '@': resolve('src/components'),
        pages: resolve('src/pages')
      }
    }
  },

  devServer: {
    proxy: {
      // // 手机登录
      // '/login/cellphone': {
      //   target: 'http://localhost:3000/login/cellphone',
      //   ws: true,
      //   secure: false,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/login/cellphone': ''
      //   }
      // }
    }
  }
}
