import * as webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const common: webpack.Configuration = {
    entry: ['./src/start.ts'],
    target: 'node',
    plugins: [
        new CleanWebpackPlugin()
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'index.js'
    }
};

export default common;