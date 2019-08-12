const path = require('path');
const ExtractCssPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractCssPlugin({
    filename: 'styles.css'
  });
  console.log('env', env);
  return ({
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // support css and scss files
        test: /\.s?css$/,
        use: [
          // style loader has to be on top
          "style-loader",
        {
          loader: ExtractCssPlugin.loader,
          options:{sourceMap: true}
        },
        {
          loader:"css-loader",
          options:{sourceMap: true}
        },
        {
          loader:"sass-loader",
          options:{sourceMap: true}
        }
        ]

      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      // server up bundle file in memory rather than generate a physical file - more efficient and faster
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }

  }
  )
}