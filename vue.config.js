const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32
})

module.exports = {
  publicPath: './',
  devServer: {
   proxy: {
     '/api': { 
       target: 'http://192.168.2.209:5000/',
       changeOrigin: true, 
       ws: true, 
       pathRewrite: { '^/api':  '/api', }
      }
    },
    host: "0.0.0.0"
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}