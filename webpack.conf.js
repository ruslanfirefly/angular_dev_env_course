
const webpack = require("webpack");

let minimizeOptions = JSON.stringify({
    removeComments: true,
    removeCommentsFromCDATA: true,
    collapseWhitespace: true,
    conservativeCollapse: false,
    preserveLineBreaks: true,
    removeEmptyAttributes: false,
    keepClosingSlash: true
});


let nameModule = "app";

let ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: "./js/app.js"
    },
    output: {
        filename: "./dist/js/[name].min.js"
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin({
            filename: './dist/css/style.min.css',
            allChunks: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: [
                    {
                        loader:'ng-annotate-loader'
                    },
                    {
                        loader: 'babel-loader'
                    },

                ],
            },
            {
                test:/\.less/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            root:".",
                            minimize: true || {/* CSSNano Options */}
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            noIeCompat: true
                        }
                    }
                ]
            },
            {
                test:/\.css/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            root:".",
                            minimize: true || {/* CSSNano Options */}
                        }
                    }
                ]
            },
            {
                test:/\.scss/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            root:".",
                            minimize: true || {/* CSSNano Options */}
                        }
                    },
                    {
                      loader:"postcss-loader"
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            noIeCompat: true
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: { loader: 'url-loader', options: { limit: 100000, name: "./dist/imgs/[hash].[ext]"} },
            },
            {
                test: /\.jpg$/,
                use: {loader: 'file-loader', options:{name: "./dist/imgs/[hash].[ext]"} }
            },
            {
                test: /\.html$/,
                use:{loader: 'ng-cache?prefix=[dir]//&name=[name].html&minimizeOptions=' + minimizeOptions + '&conservativeCollapse&module='+nameModule},
                // loader: 'ngtemplate?relativeTo=app/!html',
                exclude: /index\.html/
            },
        ],

    }

};