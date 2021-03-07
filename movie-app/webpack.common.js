const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: 'ts-loader',
                test: /\.ts(x)?$/,
                exclude: [/node_modules/, /\.test.tsx?$/]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/template.html'),
            filename: 'index.html',
            title: 'Movie App',
            appMountId: 'root',
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },
            ],
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ts',
            '.json',
        ]
    },
};
