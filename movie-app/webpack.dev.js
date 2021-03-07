const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',

    module: {

        rules: [
            {
                test: /\.(png|jpg)$/,
                include: path.join(__dirname, 'assets'),
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

        ]

    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
});

