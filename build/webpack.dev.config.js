const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname,'./../src/main')
    },
    output: {
        path: path.resolve(__dirname,'./../dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js','.less','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js'
        }
    },
    plugins: [
        // 提取的css文件写入磁盘
        new ExtractTextPlugin({
            filename: "css/style.css",
            disable: false,
            allChunks: true
        })
    ]
    
}