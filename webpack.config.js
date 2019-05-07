var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    mode: 'development',
    // context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./src/js/client.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        extractPlugin,
        new webpack.optimize.OccurrenceOrderPlugin(), 
        new HtmlWebpackPlugin ({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
};
