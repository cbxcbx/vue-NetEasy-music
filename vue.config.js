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
  }
}
