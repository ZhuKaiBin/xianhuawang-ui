const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://localhost:7273/api",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }

    }
  }

})



