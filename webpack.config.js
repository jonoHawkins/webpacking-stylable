const path = require('path');
const StylableWebpackPlugin = require("stylable-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    return {
        mode: "production",
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        devtool: "source-map",
        plugins: [new StylableWebpackPlugin(
            argv.mode === 'development' ? {} : {
            "outputCSS": false,
            "includeCSSInJS": true,
            "createRuntimeChunk": true,
            "optimize": {
                "removeUnusedComponents": true,
                "removeComments": true,
                "removeStylableDirectives": true,
                "classNameOptimizations": true,
                "shortNamespaces": true
            }
        }), new HtmlWebpackPlugin()]
    };
};
