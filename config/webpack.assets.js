const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

const config = require('config')

process.env.BABEL_ENV = 'assets'

module.exports = (env, argv) => {
  process.env.NODE_ENV = env || argv.mode
  const debug = process.env.NODE_ENV !== 'production'

  const cssLoader = [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: debug,
        importLoaders: 1
      }
    },
    MediaQueryPlugin.loader,
    'postcss-loader'
  ]

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: debug,
      includePaths: [
        config.path.assets,
        path.resolve(config.path.app, 'node_modules')
      ]
    }
  }

  const common = require('./webpack.common.js')(process.env.NODE_ENV, argv)

  return merge(common, {
    target: 'web',
    entry: {
      app: './src/assets'
    },
    output: {
      path: path.join(config.path.public, config.dir.assets),
      publicPath: `/${config.dir.assets}/`
    },
    resolve: {
      extensions: ['.js', '.json', '.css', '.scss'],
      alias: {
        'assets': config.path.assets,
        'images': path.join(config.path.assets, 'images'),
        'stylesheets': path.join(config.path.assets, 'stylesheets'),
        'javascripts': path.join(config.path.assets, 'javascripts'),
        'static': config.path.static
      }
    },
    devtool: debug && 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|es6)$/,
          include: [config.path.assets],
          exclude: [/node_modules/],
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: cssLoader
        },
        {
          test: /\.scss$/,
          use: [
            ...cssLoader,
            sassLoader
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: debug ? '[name].[ext]' : '[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(wav|mp3)$/,
          loader: 'file-loader',
          options: {
            name: debug ? '[name].[ext]' : '[name].[hash:7].[ext]'
          }
        }
      ]
    },
    /*
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /node_modules/, // new RegExp('node_modules' + '\\' + path.sep + 'jquery.*'),
            name: 'vendors',
            chunks: 'initial',
            enforce: true
          }
        }
      }
    },
    */
    plugins: [
      new CleanWebpackPlugin([
        `${config.path.public}/**`
      ], {
        root: config.path.app,
        verbose: debug
      }),
      new CopyWebpackPlugin([
        { from: config.dir.static, to: config.path.public }
      ], {}),
      new MiniCssExtractPlugin({
        filename: debug ? '[name].bundle.css' : '[name].bundle.[contenthash:7].css',
        chunkFilename: debug ? '[name].css' : '[name].[contenthash:7].css'
      }),
      new MediaQueryPlugin({}),
      new WebpackManifestPlugin({
        fileName: path.join(config.path.build, 'assets.json'),
        publicPath: `/${config.dir.assets}/`,
        filter: file => file.isChunk || file.isModuleAsset
      })
    ]
  })
}
