const path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        assetsRoot: path.resolve(__dirname, '../lib'),
        assetsSubDirectory: '',
        assetsPublicPath: './',
        productionSourceMap: false,
    },
    dev: {
        port: 8880,
        autoOpenBrowser: true,
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
}



