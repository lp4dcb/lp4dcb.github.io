const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.js'
    },
    plugins: [
        new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: { jquery: 'jQuery' }
};