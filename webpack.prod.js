const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    plugins: [
        // 默认使用内置的TerserPlugin压缩，也可以使用其它压缩插件
    ]
});