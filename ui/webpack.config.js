var path = require('path');
var webpack = require('webpack');

// see  https://github.com/webpack/webpack/issues/11467#issuecomment-808618999/
// for details
const webpack5esmInteropRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false
  }
};

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './generated/index.ts',
    vendor: ['@material-ui/core', '@material-ui/styles']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    library: '[name]'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@material-ui/styles': path.join(__dirname, '/node_modules/@proteinjs/ui/node_modules/@material-ui/styles'),
      '@material-ui/core/styles': path.join(__dirname, '/node_modules/@proteinjs/ui/node_modules/@material-ui/core/styles'),
      'react': path.join(__dirname, '/node_modules/react'),
      'process': 'process/browser',
    },
    // provide shims for node libraries for webpack >= 5
    fallback: { 
      'crypto': require.resolve('crypto-browserify'),
      'util': require.resolve('util/'),
      'events': require.resolve('events/'),
      'url': require.resolve('url/'),
      'buffer': require.resolve('buffer/'),
      'stream': require.resolve('stream-browserify'),
      'process/browser': require.resolve('process/browser'),
    },
  },
  module: {
    rules: [
      webpack5esmInteropRule,
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, use: ['ts-loader'], exclude: /node_modules/ },
    ],
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
                // name: 'vendor',
                chunks: 'all',
                test: /node_modules/
            }
        }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',                 
        Buffer: ['buffer', 'Buffer'],
    }),
  ],
};