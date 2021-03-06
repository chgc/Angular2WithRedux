'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./webpack/loaders');

const basePlugins = [
    new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
        __PRODUCTION__: process.env.NODE_ENV === 'production',
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].bundle.js'),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        minify: false
    }),
    new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        _: "lodash"
    })
];

const devPlugins = [];

const prodPlugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: {
            keep_fnames: true
        },
        compress: {
            warnings: false
        }
    })
];

const plugins = basePlugins
    .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
    .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        app: './src/index.ts'
    },

    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: '[name].js',
        publicPath: '/',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    plugins: plugins,

    module: {
        loaders: [
            loaders.ts,
            loaders.html,
            loaders.css,
            loaders.svg,
            loaders.eot,
            loaders.woff,
            loaders.woff2,
            loaders.ttf
        ],
        noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/]
    },

    postcss: function () {
        return [
            require('postcss-import')({
                addDependencyTo: webpack
            }),
            require('postcss-cssnext')({
                browsers: ['ie >= 8', 'last 2 versions']
            }),
        ];
    }
};
