var path = require('path');

// see  https://github.com/webpack/webpack/issues/11467#issuecomment-808618999/
// for details
const webpack5esmInteropRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false
  }
};

module.exports = {
    // entry: './generated/index.ts',
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
    // output: {
    //   path: path.join(__dirname, 'dist'),
    //   filename: 'index.js',
    //   library: 'app'
    // },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      alias: {
        '@material-ui/styles': path.join(__dirname, '/node_modules/@proteinjs/ui/node_modules/@material-ui/styles'),
        '@material-ui/core/styles': path.join(__dirname, '/node_modules/@proteinjs/ui/node_modules/@material-ui/core/styles'),
        'react': path.join(__dirname, '/node_modules/react')
      },
      fallback: { 
        "crypto": false,
        "util": false,
        "events": false,
        "url": false,
        "buffer": false,
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
};