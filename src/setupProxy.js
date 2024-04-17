/*
安装 http-proxy-middleware
$ yarn add http-proxy-middleware

src/setupProxy.js
*/
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/jian', {
      target: 'https://www.jianshu.com/asimov',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/jian': '' },
    })
  );
  app.use(
    createProxyMiddleware('/zhi', {
      target: 'https://news-at.zhihu.com/api/4',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '^/zhi': '' },
    })
  );
};

//测试地址：
//https://www.jianshu.com/asimov/subscriptions/recommended_collections
//https://news-at.zhihu.com/api/4/news/latest
