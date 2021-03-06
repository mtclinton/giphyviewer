const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            }
                        },
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
                exclude: /node_modules/,
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[fullhash].bundle.js',
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        publicPath: "/",
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html",
            favicon: path.resolve(__dirname, "public/favicon.ico")
        }),
        new MiniCssExtractPlugin({
            filename: "[hash].styles",
            chunkFilename: "[id]--[hash].styles",
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "public/styles/style.styles", to: "css" },
            ],
        }),
        new Dotenv()

    ],
    target: 'web'
};