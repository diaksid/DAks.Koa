const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')

const config = require('config')

process.env.BABEL_ENV = 'server'

module.exports = (env, argv) => {
  process.env.NODE_ENV = env || argv.mode

  const common = require('./webpack.common.js')(process.env.NODE_ENV, argv)

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
          include: [config.path.src],
          exclude: [/node_modules/],
          loader: 'babel-loader'
        }
      ]
    }
  })
}
