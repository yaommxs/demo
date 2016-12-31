var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel",
          query:
            {
              plugins: ['transform-decorators-legacy'],
              presets:["es2015", "react", "stage-1"]
            }
          },{test: /\.css$/, loader: 'style-loader!css-loader'},
          { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};
