const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

   experiments: {
     futureDefaults: true,
   },

   plugins: [new HtmlWebpackPlugin()]
}
