const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      target: 'http://localhost:3001', // 代理转发的地址
      changeOrigin: true, // 让服务端知道从哪发出来的,知道请求头中host的值
      pathRewrite: {'^/api1': ''} // 重写请求路径
    })
  )
}