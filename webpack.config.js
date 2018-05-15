const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: './src/game.js',
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  devtool: 'eval-source-map'
}

module.exports = config
