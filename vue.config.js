const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 48
    })
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue : 75, // 换算的基数
              // selectorBlackList  : ['vant-'], // 忽略转换正则匹配项
              propList   : ['*'],
              // exclude: /node_modules/i
              exclude: (file) => { 
                return file.indexOf('xx') !== -1 
              }
            })
          ],
          autoprefixer: {}
        }
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://pf.mayiyahei.net",
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: { "^/api": "" },
  //     }
  //   }
  // }
})
