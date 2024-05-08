var path = require('path');
var webpack = require('webpack');

// see  https://github.com/webpack/webpack/issues/11467#issuecomment-808618999/
// for details
const webpack5esmInteropRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
};

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './generated/index.ts',
  },
  output: {
    filename: '[name].[contenthash].js', // Use content hash for cache busting
    path: path.join(__dirname, 'dist/bundles'),
    library: '[name]',
    clean: true, // Clean the output directory before emit
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      react: path.join(__dirname, '/node_modules/react'),
      process: 'process/browser',
      '@mui/material': path.join(__dirname, '/node_modules/@mui/material'),
      '@mui/icons-material': path.join(__dirname, '/node_modules/@mui/icons-material'),
    },
    // provide shims for node libraries for webpack >= 5
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      util: require.resolve('util/'),
      events: require.resolve('events/'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      'process/browser': require.resolve('process/browser'),
    },
  },
  module: {
    rules: [
      webpack5esmInteropRule,
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, use: ['ts-loader'], exclude: /node_modules/ },
      // image files
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // This line will keep the original path and filename
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // Matches node_modules folder
          name: 'vendor',
          chunks: 'all',
          priority: -10,
        },
      },
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
