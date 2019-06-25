const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      // support css and scss files
      test:/\.s?css$/,
      use:['style-loader','css-loader', 'sass-loader']
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // server up bundle file in memory rather than generate a physical file - more efficient and faster
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }

};
