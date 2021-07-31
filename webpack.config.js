/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  name: 'client',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  mode: 'development', // production
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  target: 'web',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    historyApiFallback: true,
  },
};
