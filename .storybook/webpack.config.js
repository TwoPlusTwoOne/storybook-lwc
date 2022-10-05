const LWCWebpackPlugin = require('lwc-webpack-plugin')

module.exports = async ({ config, mode }) => {
  config.plugins.push(new LWCWebpackPlugin())
  config.module.rules = [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-optional-chaining']
        }
      }
    },
    {
      test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      loader: 'file-loader/dist/cjs.js',
      query: { name: 'static/media/[name].[hash:8].[ext]' },
    },
  ]

  return config
}
