var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src' , 'assets', 'index.tsx'),
    commons: ['react', 'react-dom']
  },
  output: {
      path: path.join(__dirname, 'dist' , 'assets'),
      filename: '[hash].js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      loaders: [
          { test: /\.tsx?$/, loaders: ["awesome-typescript-loader?configFileName=tsconfig.webpack.json"] },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src' , 'assets', 'templates', 'index.html')
    }),
   new webpack.optimize.UglifyJsPlugin(),
   new webpack.optimize.CommonsChunkPlugin({ name: 'commons', filename: 'commons-[hash].js' })
  ]
};