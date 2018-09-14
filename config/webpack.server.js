const path = require('path')
const config = require('config')

// const webpack = require('webpack')
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
        config.path.assets,
        path.resolve(config.path.app, 'node_modules')
      ]
    }
  }

  return {
    mode: argv.mode,
    entry: {
      main: './src/assets/index.mdc-web.js' // ['@babel/polyfill', './src/assets']
    },
    output: {
      path: path.join(config.path.build, config.dir.assets),
      filename: debug ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      chunkFilename: debug ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
      publicPath: `/${config.dir.assets}/`
    },
    resolve: {
      modules: [
        // path.resolve(config.path.app, 'node_modules'),
        config.path.assets
      ],
      extensions: ['.js', '.json', '.css', '.scss'],
      enforceExtension: false,
      alias: {
        'assets': config.path.assets,
        'images': path.resolve(config.path.assets, 'images'),
        'stylesheets': path.resolve(config.path.assets, 'stylesheets'),
        'javascripts': path.resolve(config.path.assets, 'javascripts'),
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
            postcssLoader
          ]
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
      /*
      new webpack.ProvidePlugin({
        $: 'jquery',
        'Popper': 'popper.js'
      }),
      */
      new CleanWebpackPlugin([config.path.build], {
        verbose: verbose
      }),
      new CopyWebpackPlugin([
        { from: config.dir.static, to: config.path.build }
      ], {}),
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
