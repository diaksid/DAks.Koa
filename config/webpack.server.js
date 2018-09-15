const path = require('path')
const config = require('config')

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env, argv) => {
  const verbose = argv.verbose === true

  process.env.NODE_ENV = argv.mode

  return {
    mode: argv.mode,
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    context: config.path.app,
    entry: {
      app: './src/server'
    },
    output: {
      path: config.path.build,
      filename: 'server.js'
    },
    resolve: {
      modules: [
        config.path.src,
        path.join(config.path.app, 'node_modules')
      ],
      extensions: ['.js', '.json'],
      enforceExtension: false
    },
    externals: [
      nodeExternals()
    ],
    devtool: 'evil',
    module: {
      rules: [
        {
          test: /\.(js|es6)$/,
          include: config.path.src,
          exclude: [/node_modules/],
          use: {
            loader: 'babel-loader',
            options: {
              comments: false
            }
          }
        }
      ]
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
        TYPE: JSON.stringify('server'),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new CleanWebpackPlugin([
        `${config.path.build}/server*.*`
      ], { verbose: verbose })
    ]
  }
}
