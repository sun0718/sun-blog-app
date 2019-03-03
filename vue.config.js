
const path = require('path')

module.exports = {
    // baseUrl  type:{string} default:'/'
    // 关闭eslint
    lintOnSave:false,
    publicPath: '/',
    devServer: {
        proxy: {
            '/apis': {
                target: 'http://192.168.40.1:9000/',  // target host
                ws: true,  // proxy websockets 
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@public',path.join(__dirname, 'public'))
            .set('@assets',path.join(__dirname, 'src/assets'))
    }
}