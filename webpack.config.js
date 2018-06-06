var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var  MiniCssExtractPlugin = require('mini-css-extract-plugin');   //样式分离
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

    const PATHS={
        app:path.resolve(__dirname,'./app/app.js'),
        build:path.resolve(__dirname,'./build'),
    };
    module.exports = {
        entry: {
            app:[
                'webpack-dev-server/client?http://localhost:8080/',
                './app/app.js'
            ]
        },
        // entry: {
        //     app:PATHS.app
        // },
        output: {
            path:PATHS.build,
            filename: "script/[name].main.js",
            // publicPath: 'src/'
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,

                loader: 'babel-loader' ,
                query: {
                    presets: ['es2015', 'react',"stage-2"],
                    plugins: [
                       ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": 'css' }]
                    ]
                }
            }, {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            javascriptEnabled: true,
                            // modifyVars: {     //  可全局改变主题颜色
                            //     'primary-color': '#531dab'
                            // }
                        }
                    }
                ]
            },{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            javascriptEnabled: true,
                            // modifyVars: {     //  可全局改变主题颜色
                            //     'primary-color': '#531dab'
                            // }
                        }
                    }
                ]
            },{
                test:/\.(png|gif|jpg)$/, //|jpeg|bmp|woff|woff2|svg|ttf|eot
                use:[{
                    loader:'url-loader',
                    options: {
                        limit:500,//当图片小于这个值他会生成一个图片的url 如果是一个大于的他会生成一个base64的图片在js里展示
                        outputPath: '/imgs/',// 指定打包后的图片位置
                        name:'[name].[ext]?[hash]',
                        // publicPath:PATHS.build,

                    }
                }],
                // loader:'url-loader?limit=5000'// 限制大小5kb
            }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/app/app.html',
                filename:'App.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({
                url: 'http://localhost:8080' +'/App.html'
            }),
            new MiniCssExtractPlugin({
                filename: "style/[name].[contenthash].css",
                chunkFilename: "style/[id].[contenthash].css"
            })
        ],
        devServer:{
            contentBase:'./build',
            historyApiFallback:true,//不跳转
            hot:true,// 使用热加载插件 HotModuleReplacementPlugin
            inline:true,//实时刷新
            progress:true,
            port: 8080, //端口你可以自定义
            open: true
        }
    }