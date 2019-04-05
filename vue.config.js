var webpack = require('webpack');
const path = require('path')

console.log(process.env.NODE_ENV)

module.exports = {
    // publicPath  type:{string} default:'/'
    // 开发环境指向当前目录，线上环境绝对值
    publicPath:process.env.NODE_ENV === 'development' ? '/' : '../',
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
    },
    // quill-image-resize-module  error https://github.com/surmon-china/vue-quill-editor/issues/272
    configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
            'window.Quill': 'quill/dist/quill.js',
            'Quill': 'quill/dist/quill.js'
          }),
        ]
      }
}