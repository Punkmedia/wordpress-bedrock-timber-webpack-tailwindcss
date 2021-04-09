// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = (env, argv) => {
    return {
        mode: 'development',
        entry: './assets/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            publicPath: '',
        },
        devServer: {
            open: true,
            host: 'localhost',
        },
        plugins: [
            // Add your plugins here
            // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            }),
            new CleanWebpackPlugin({}),
            new WebpackManifestPlugin(),
            new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 3000,
                proxy: 'http://web-kalkulacka.local/'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                        }
                    ]
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                    type: 'asset',
                },

                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
    }
};
