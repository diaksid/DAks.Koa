const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

const config = require('config')
const publicPath = `/${config.dir.assets}/`

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
        path.join(config.path.app, 'node_modules')
      ]
    }
  }

  const common = require('./webpack.common.js')(process.env.NODE_ENV, argv)

  return merge(common, {
    target: 'web',
    entry: {
      app: [
        `./${config.dir.src}/${config.dir.assets}/javascripts`,
        `./${config.dir.src}/${config.dir.assets}/stylesheets`,
        `./${config.dir.src}/${config.dir.assets}/fonts/iconfont/.font`
      ],
      images: glob.sync(`./${config.dir.src}/${config.dir.assets}/images/**`, { nodir: true })
    },
    output: {
      path: path.join(config.path.public, config.dir.assets),
      publicPath: publicPath
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
    /*
    externals: {
      jquery: 'jQuery',
      'popper.js': 'Popper'
    },
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
          exclude: [
            path.join(config.path.assets, 'images'),
            path.join(config.path.assets, 'sprite')
          ],
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          include: [path.join(config.path.assets, 'images')],
          loader: 'file-loader',
          options: {
            name: '[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.svg$/,
          include: [path.join(config.path.assets, 'sprite')],
          loader: 'svg-sprite-loader',
          options: {
            extract: false
          }
        },
        {
          test: /\.(wav|mp3)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.font\.js$/,
          use: [
            ...cssLoader,
            {
              loader: 'webfonts-loader',
              options: { publicPath: publicPath }
            }
          ]
        },
        {
          test: require.resolve('wowjs'),
          loader: 'exports-loader?this.WOW'
        }
      ]
    },
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
      new SpriteLoaderPlugin({}),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.[contenthash:7].css',
        chunkFilename: '[name].[contenthash:7].css'
      }),
      new MediaQueryPlugin({}),
      new WebpackManifestPlugin({
        fileName: path.join(config.path.build, 'assets.json'),
        publicPath: publicPath,
        filter: file => (file.isChunk || file.isModuleAsset) && !/\.font\.js$/.test(file.name)
      })
    ]
  })
}
