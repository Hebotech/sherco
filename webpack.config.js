const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, env) => {
  console.log(env);
  if (env.mode === 'development') {
    return {
      entry: './src/index.js',
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(jpg|png|svg)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: { presets: ['@babel/env'] },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            sideEffects: true,
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
            sideEffects: true,
          },
        ],
      },
      resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
          Atoms: path.resolve(__dirname, 'src/components/Atoms'),
          Molecules: path.resolve(__dirname, 'src/components/Molecules'),
          Organisms: path.resolve(__dirname, 'src/components/Organisms'),
          Utilities: path.resolve(__dirname, 'src/components/Utilities'),
        },
      },
      output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
      },
      devServer: {
        contentBase: path.join(__dirname, '/public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true,
        historyApiFallback: true,
      },
      plugins: [new webpack.HotModuleReplacementPlugin()],
    };
  } else if (env.mode === 'production') {
    return {
      entry: './src/index.js',
      mode: 'production',
      module: {
        rules: [
          {
            test: /\.(jpg|png|svg)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: { presets: ['@babel/env'] },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            sideEffects: true,
          },
          {
            test: /\.s[ac]ss$/i,
            sideEffects: true,
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
          Atoms: path.resolve(__dirname, 'src/components/Atoms'),
          Molecules: path.resolve(__dirname, 'src/components/Molecules'),
          Organisms: path.resolve(__dirname, 'src/components/Organisms'),
          Utilities: path.resolve(__dirname, 'src/components/Utilities'),
        },
      },
      output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./public/index.html'),
        }),
      ],
    };
  }
};
