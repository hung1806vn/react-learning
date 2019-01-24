var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
    mode: 'development',
    // context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./src/js/client.js",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use:{
                loader: "babel-loader"
            }
        }]
    },
    output:{
        path: __dirname +"/src/",
        filename: "client.min.js"
    },
    plugins: debug?[]:[
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle:false, sourceMap:false
        }),
    ],
};
