const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/today_rates',
    createProxyMiddleware({
      target: 'https://1smtg.com',
      changeOrigin: true,
      pathRewrite: {
        '^/today_rates': '/today_rates',
      },
    })
  );
};
