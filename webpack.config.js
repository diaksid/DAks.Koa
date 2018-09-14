const path = require('path')
const config = require('config')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const manifestFileName = path.join(config.path.build, 'assets.json')

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
        require('css-mqpacker')({ sort: false }),
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
        config.path.assets,
        path.resolve(config.path.app, 'node_modules')
      ]
    }
  }

  process.env.NODE_ENV = argv.mode

  return {
    mode: argv.mode,
    entry: {
      main: './src/assets' // ['@babel/polyfill', './src/assets']
    },
    output: {
      path: path.join(config.path.public, config.dir.assets),
      filename: debug ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      chunkFilename: debug ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      publicPath: `/${config.dir.assets}/`
    },
    resolve: {
      modules: [
        config.path.assets,
        path.join(config.path.app, 'node_modules')
      ],
      extensions: ['.js', '.json', '.css', '.scss'],
      enforceExtension: false,
      alias: {
        'assets': config.path.assets,
        'images': path.join(config.path.assets, 'images'),
        'stylesheets': path.join(config.path.assets, 'stylesheets'),
        'javascripts': path.join(config.path.assets, 'javascripts'),
        'static': config.path.static
      }
    },
    externals: {
      jquery: 'jQuery',
      'popper.js': 'Popper'
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
        name: 'vendors',
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
      new webpack.DefinePlugin({
        TYPE: JSON.stringify('assets'),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      /*
      new webpack.ProvidePlugin({
        $: 'jquery'
      }),
      */
      new CleanWebpackPlugin([
        config.path.public,
        manifestFileName
      ], { verbose: verbose }),
      new CopyWebpackPlugin([
        { from: config.dir.static, to: config.path.public }
      ], {}),
      new MiniCssExtractPlugin({
        filename: debug ? '[name].bundle.css' : '[name].[contenthash].bundle.css',
        chunkFilename: debug ? '[id].css' : '[id].[contenthash].css'
      }),
      new MediaQueryPlugin({}),
      new WebpackManifestPlugin({
        fileName: manifestFileName,
        publicPath: `/${config.dir.assets}/`,
        filter: file => file.isChunk || file.isModuleAsset
      })
    ]
  }
}
