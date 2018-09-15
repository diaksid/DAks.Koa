const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = require('config')

module.exports = (env, argv) => {
  process.env.DEBUG = env.DEBUG

  return {
    mode: argv.mode,
    context: config.path.app,
    output: {
      filename: env.DEBUG ? '[name].bundle.js' : '[name].[contenthash:7].bundle.js',
      chunkFilename: env.DEBUG ? '[name].bundle.js' : '[name].[contenthash:7].bundle.js'
    },
    resolve: {
      modules: [
        config.path.src,
        path.join(config.path.app, 'node_modules')
      ],
      enforceExtension: false
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          extractComments: true,
          sourceMap: true
        })
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(argv.mode),
        'process.env.DEBUG': JSON.stringify(env.DEBUG)
      })
    ],
    stats: {
      colors: true,
      modules: env.DEBUG,
      hash: env.DEBUG,
      reasons: env.DEBUG,
      warnings: env.DEBUG
    }
  }
}
