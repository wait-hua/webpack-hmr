var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// css文件单独打包
const ExtractTextPlugin = require('extract-text-webpack-plugin') 

module.exports = {
    entry:{
        'index':[path.resolve(__dirname, '../src/index'),'webpack-hot-middleware/client']
    },
    output:{
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module:{
        rules:[{
            test:/\.(html|rgl)$/,
            use:'html-withimg-loader'
        },{
            test:/\.(scss|css)$/,
            // use:ExtractTextPlugin.extract({
            //     use:[{loader:'css-loader',options:{
                    
            //     }},{loader:'sass-loader',options:{
            //         // includePaths:['src/css']
            //     }}],  // 调用顺序从右到左 
            //     fallback: 'style-loader'
            // })
            use:['style-loader','css-loader','sass-loader']
        },{
            test:/\.js$/,
            loader: 'babel-loader', 
            exclude: /node_modules/   // @NOTE
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: path.resolve(__dirname, '../src/index.html'), // 模板路径
            chunks:['index']
        }),
        // new ExtractTextPlugin("css/[name]-[contenthash:8].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}