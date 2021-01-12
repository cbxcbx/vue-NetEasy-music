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
        '@': resolve('src/components')
      }
    }
  },

  devServer: {
    proxy: {
      '/captcha/sent': {
        target: 'http://localhost:3000/captcha/sent',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/captcha/sent': ''
        }
      },
      '/captcha/verify': {
        target: 'http://localhost:3000/captcha/verify',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/captcha/verify': ''
        }
      }
    }
  }
}
