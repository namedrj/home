/**
 * 在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或
 * 热模块替换(hot module replacement)能力的 source map 和 localhost server
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});