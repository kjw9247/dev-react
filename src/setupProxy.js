const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'http://lcoalhost:8000',
      changeOrigin: true,
      pathFilter: {'^/proxy':''},
    }),
  );
}