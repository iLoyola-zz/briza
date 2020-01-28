const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  return {
    entry: [
      'babel-polyfill',
      './src/js/index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/bundle.js'
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: 'css/styles.css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }, {
          test: /\.scss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }, {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }, {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          include: [/fonts/],
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: url => '../fonts/' + url
          }
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public')
    }
  }
}