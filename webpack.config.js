var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    watch: true,

    target: 'electron',

    entry: './app/src/entry.js',

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            },
            {
                test: /\.(png|jpg|gif|svg|sqlite)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],
    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    }

}