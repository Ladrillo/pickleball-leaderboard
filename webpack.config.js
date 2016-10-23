var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './client/RootComponent',

    output: {
        path: path.resolve('client/bundle'),
        publicPath: '/bundle/',
        filename: 'bundle.js'
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],

    devtool: 'source-map',

    module: {

        loaders: [
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=800'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    }
};