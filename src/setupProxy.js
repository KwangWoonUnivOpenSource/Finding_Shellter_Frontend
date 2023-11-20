const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/howtoearthquake',
        createProxyMiddleware(
            {
                target: 'http://localhost:8080/search',
                changeOrigin: true,
            }
        )
    )
}