const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)/,exclude: /node_modules/, use: ['babel-loader'] },
            {test: /\.css$/, use: ['style-loader', 'postcss-loader'] },
            {test: /\.(png|jpg|gif)$/, use: ['url-loader'] },
            {test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=./[name].[ext]'}
            
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};