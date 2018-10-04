const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = require('config')

module.exports = (env, argv) => {
  const debug = process.env.DEBUG = env !== 'production'

  return {
    mode: argv.mode || 'development',
    context: config.path.app,
    output: {
      filename: '[name].[contenthash:7].js',
      chunkFilename: '[name].[contenthash:7].js'
    },
    resolve: {
      modules: [
        config.path.src,
        path.join(config.path.app, 'node_modules')
      ],
      enforceExtension: false
    },
    node: {
      fs: 'empty'
    },
    performance: {
      hints: false
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: debug,
          cache: true,
          parallel: true,
          extractComments: !debug
        })
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
        'process.debug': JSON.stringify(debug)
      })
    ],
    stats: {
      colors: true,
      children: false,
      modules: debug,
      hash: debug,
      reasons: debug,
      warnings: debug
    }
  }
}
