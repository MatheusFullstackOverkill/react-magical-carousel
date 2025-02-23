// webpack.config.js
// Import dependencies
const path = require('path');
// Takes our css/scss files and compiles them into one single css file
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
// Using index.html as a template puts an html file in our build folder
const HtmlWebPackPlugin = require('html-webpack-plugin');
// Define the config object
const config = {
    target: 'web',
    entry: './src/index.tsx', // Our entry file, will take all files connected to index.js and compile them together
    output: {
            path: path.resolve(__dirname,'dist'), // Tells webpack where to put the output files
            filename: 'index.js', // Naming our compiled ES5 file
            library: 'react-magical-carousel',
            libraryTarget: 'umd',
            globalObject: 'this',
            umdNamedDefine: true
        },
    module: {
        rules: [
            // Tells webpack to use Babel to compile .js files
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            // Tells webpack to use MiniCss to compile css/scss files. If that fails, use css-loader then sass-loader
            // {
            //     test: /\.sass$/,
            //     use: [
            //     MiniCssExtractPlugin.loader,
            //         "css-loader",
            //         "sass-loader"
            //     ]
            // },
            // Converts images into base64
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        // new HtmlWebPackPlugin({
        //   template: "./index.html", // Template for the html file used in build
        //   filename: "./index.html" // Name of the html file webpack will put in the build folder
        // }),
        // new MiniCssExtractPlugin({filename: 'style.css'}) // Name of our CSS file in the build folder
    ]
};
// export the config object so when webpack runs it knows to use it.
module.exports = config;