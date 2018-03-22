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
            {test: /\.css$/, 
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:5]__[local]'
                        }
                    },
                    'postcss-loader'

                ] 
            },
            {test: /\.(png|jpg|gif|otf)$/, use: ['url-loader'] },
            {test: /\.otf$/, 
                loader: 'url-loader',
                options: {
                    limit: 500000,
                    name: './fonts/[name].[ext]'
                }
            },

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