const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

const config = require('config')

module.exports = (env = {}, argv) => {
  if (!env.hasOwnProperty('DEBUG')) {
    env.DEBUG = argv.hasOwnProperty('debug') ? true : argv.mode !== 'production'
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: (loader) => [
        require('postcss-import')({ root: loader.resourcePath }),
        require('postcss-preset-env')({
          autoprefixer: {
            cascade: false,
            grid: true
          }
        }),
        require('css-mqpacker')({ sort: false }),
        require('cssnano')({
          preset: ['default', {
            discardComments: { removeAll: !env.DEBUG },
            normalizeWhitespace: { exclude: env.DEBUG }
          }]
        })
      ]
    }
  }

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      includePaths: [
        config.path.assets,
        path.resolve(config.path.app, 'node_modules')
      ]
    }
  }

  const common = require('./webpack.common.js')(env, argv)

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
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|es6)$/,
          include: config.path.assets,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              comments: false,
              presets: [
                ['@babel/preset-env', { modules: false }]
              ],
              plugins: []
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            cssLoader,
            MediaQueryPlugin.loader,
            postcssLoader
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            cssLoader,
            MediaQueryPlugin.loader,
            postcssLoader,
            sassLoader
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: env.DEBUG ? '[name].[ext]' : '[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(wav|mp3)$/,
          loader: 'file-loader',
          options: {
            name: env.DEBUG ? '[name].[ext]' : '[name].[hash:7].[ext]'
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
        verbose: env.DEBUG
      }),
      new CopyWebpackPlugin([
        { from: config.dir.static, to: config.path.public }
      ], {}),
      new MiniCssExtractPlugin({
        filename: env.DEBUG ? '[name].bundle.css' : '[name].[contenthash:7].bundle.css',
        chunkFilename: env.DEBUG ? '[id].css' : '[id].[contenthash:7].css'
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
