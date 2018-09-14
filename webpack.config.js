const path = require('path')
const config = require('config')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env, argv) => {
  const debug = argv.mode !== 'production'
  const verbose = argv.verbose === true

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
        require('cssnano')({
          preset: ['default', {
            discardComments: { removeAll: !debug },
            normalizeWhitespace: { exclude: debug }
          }]
        })
      ]
    }
  }

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      includePaths: [
        path.resolve(config.path.src, 'assets'),
        path.resolve(config.path.app, 'node_modules')
      ]
    }
  }

  return {
    mode: argv.mode,
    entry: {
      main: ['@babel/polyfill', './src/assets']
    },
    output: {
      path: path.join(config.path.build, config.dir.assets),
      filename: debug ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      chunkFilename: debug ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      publicPath: `/${config.dir.assets}/`
    },
    resolve: {
      modules: [
        config.path.src,
        path.resolve(config.path.src, 'assets', 'stylesheets', 'frontend'),
        path.resolve(config.path.app, 'node_modules')
      ],
      extensions: ['.js', '.json', '.css', '.scss'],
      enforceExtension: false,
      alias: {
        'static': path.join(config.path.app, config.dir.static),
        'assets': path.join(config.path.src, config.dir.assets),
        'images': path.join(config.path.src, config.dir.assets, 'images'),
        'stylesheets': path.join(config.path.src, config.dir.assets, 'stylesheets'),
        'javascripts': path.join(config.path.src, config.dir.assets, 'javascripts')
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: config.path.src,
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
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            cssLoader,
            postcssLoader,
            sassLoader
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: debug ? '[name].[ext]' : '[name].[hash:base64:16].[ext]'
          }
        },
        {
          test: /\.(wav|mp3)$/,
          loader: 'file-loader',
          options: {
            name: debug ? '[name].[ext]' : '[name].[hash:base64:16].[ext]'
          }
        }
      ]
    },
    optimization: {
      /*
      splitChunks: {
        name: 'vendor',
        chunks: 'all'
      },
      */
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
      new CleanWebpackPlugin([config.path.build], {
        verbose: verbose
      }),
      new CopyWebpackPlugin([{ from: config.dir.static, to: config.path.build }], {}),
      new MiniCssExtractPlugin({
        filename: debug ? '[name].bundle.css' : '[name].[contenthash].bundle.css',
        chunkFilename: debug ? '[id].css' : '[id].[contenthash].css'
      }),
      new WebpackManifestPlugin({
        publicPath: `/${config.dir.assets}/`,
        filter: file => file.isChunk || file.isModuleAsset
      })
    ]
  }
}
