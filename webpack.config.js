const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      // Atoms: path.resolve(__dirname, 'src/components/Atoms'),
      // Molecules: path.resolve(__dirname, 'src/components/Molecules'),
      // Organisms: path.resolve(__dirname, 'src/components/Organisms'),
      // Utilities: path.resolve(__dirname, 'src/components/Utilities'),
      // Actions: path.resolve(__dirname, 'src/store/actions'),
      // Epics: path.resolve(__dirname, 'src/store/epics'),
      // Reducers: path.resolve(__dirname, 'src/store/reducers'),
      // Containers: path.resolve(__dirname, 'src/store/containers'),
      // GQL: path.resolve(__dirname, 'src/GQL'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
