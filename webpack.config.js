const path = require('path');
const StylableWebpackPlugin = require("stylable-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map",
    plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin()]
};
