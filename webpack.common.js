const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/script/index.js'),
    login: path.resolve(__dirname, 'src/script/handle-login.js'),
    style: path.resolve(__dirname, 'src/style/style.css'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'edukasi.html',
      template: path.resolve(__dirname, 'src/page/edukasi.html'),
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'loginUser.html',
      template: path.resolve(__dirname, 'src/page/loginUser.html'),
      chunks: ['login'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets/'),
          to: path.resolve(__dirname, 'dist/assets/'),
        },
      ],      
    }),
  ]
}