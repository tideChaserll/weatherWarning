const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: __dirname + "/web-src/index.tsx",
    output: {
        path: __dirname + "/web-public",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {  
                test: /\.js$/,  
                exclude: /node_modules/,  
                use: {  
                  loader: 'babel-loader'  
                }  
            },  
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                exclude: /node_modules/
            }
        ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    devServer:{
        compress: true,
        port: 3001,
        hot: true,
        static: {
            directory: path.join(__dirname, 'web-public'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './web-public/index.html',
        }),
    ],
}