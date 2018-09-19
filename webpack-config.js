var debug = process.env.NODE_ENV !== "production"
var webpack = require('webpack');

module.exports = {
    context = __dirname,
    devtool = debug?"inline-sourcemap":null,
    entry = "./js/main.js",
    //defines asynchronous module loading
    output:{
        path: __dirname+"/js",
        fileName: "bundle.js"
    }
}