const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function getModulePackageName(module) {
    if (!module.context) return null;

    const moduleRelativePath = module.context.split('node_modules').pop() || '';
    const moduleDirName = moduleRelativePath.split(path.sep);

    let packageName = moduleDirName[1];
    // handle tree shaking
    if (packageName && packageName.match('^_')) {
        // eslint-disable-next-line prefer-destructuring
        packageName = packageName.match(/^_(@?[^@]+)/)[1];
    }
    return packageName;
}

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        process.env.ANALYZE && new BundleAnalyzerPlugin(),
    ],
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: 'all',
            name: 'vendors',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                echartsMap: {
                    test: (module)=> {
                        if (!module.context) return null;
                        if (module.context.indexOf('echarts\\map') > 0) {
                            return true;
                        }
                    },
                    name: 'echarts-map',
                    priority: 100,
                },
                vendors: {
                    reuseExistingChunk: true,
                    test: (module) => {
                        const packageName = getModulePackageName(module) || '';
                        if (packageName) {
                            return [
                                'jquery', 'echarts'
                            ].includes(packageName);
                        }
                        return false;
                    },
                    name: (module) => {
                        const packageName = getModulePackageName(module);
                        if (packageName) {
                            if (['jquery'].indexOf(packageName) >= 0) {
                                return 'jquery';
                            }
                            if (['echarts'].indexOf(packageName) >= 0) {
                                return 'charts';
                            }
                        }
                        return 'misc';
                    },
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true, //模块嵌套引入时，判断是否复用已经被打包的模块
                    filename: 'common.js'
                }
            }
        }
    },
});