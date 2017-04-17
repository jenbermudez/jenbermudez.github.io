const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
    './src/styles.css'
  ],
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, '..')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[contenthash].css"),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}