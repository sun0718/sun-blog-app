
const path = require('path')

console.log(process.env.NODE_ENV)

module.exports = {
    // publicPath  type:{string} default:'/'
    // 开发环境指向当前目录，线上环境绝对值
    publicPath:process.env.NODE_ENV === 'production' ? './' : '/',
    // 关闭eslint
    lintOnSave:false,
    devServer: {
        proxy: {
            '/apis': {
                target: 'http://localhost:9000/',  // target host
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