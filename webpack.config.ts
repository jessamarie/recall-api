import path from "path";
import * as webpack from 'webpack';
// import * as nodeExternals from 'webpack-node-externals';

const nodeExternals = require('webpack-node-externals');

const config: webpack.Configuration = {
    entry: ['webpack/hot/poll?100', './src/start.ts'],
    watch: true,
    target: 'node',
    externals: [
        nodeExternals({
            allowlist: ['webpack/hot/poll?100']
        })
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    }
}

export default config;