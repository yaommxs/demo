var path = require('path')
module.exports = {
  entry: path.resolve(__dirname, './app/index.js'),

  output: {
    path: path.resolve(__dirname, './build'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
    ]
  }
}
