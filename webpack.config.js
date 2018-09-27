const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // devServer: {
    //     contentBase: 'http://127.0.0.1',
    //     port: 3000
    // },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: [{
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'index.html'
            //             }
            //         },
            //         {
            //             loader: 'extract-loader'
            //         },
            //         {
            //             loader: 'html-loader'
            //         }
            //     ]
            // },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        attrs: [

                            'img:src', 'img:data-src'

                        ]
                    }
                }]
            },
            {

                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            },

            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name]-[hash:3].[ext]',
                        outputPath: 'assets/imgs/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: './src/images/up.png'
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/media'),
            to: path.resolve(__dirname, '/dist/media')
        }]),
        new MiniCssExtractPlugin()
    ]
}