const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

   experiments: {
     outputModule: true,
     futureDefaults: true,
   },

   plugins: [new HtmlWebpackPlugin({scriptLoading: 'module'})]
}
