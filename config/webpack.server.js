const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const config = require('config')

module.exports = (env = {}, argv) => {
  if (!env.hasOwnProperty('DEBUG')) {
    env.DEBUG = argv.hasOwnProperty('debug') ? true : argv.mode !== 'production'
  }

  const common = require('./webpack.common.js')(env, argv)

  return merge(common, {
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    entry: {
      app: './src/server'
    },
    output: {
      path: config.path.build,
      filename: 'server.js'
    },
    resolve: {
      extensions: ['.js', '.json']
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
    }
  })
}
