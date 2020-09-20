import merge from 'webpack-merge';
import * as webpack from 'webpack';
import common from './webpack.common';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals');

const config: webpack.Configuration = merge(common, {
    mode: 'production',
    externals: [nodeExternals()],
    output: {
        path: path.join(__dirname, 'dist'),
    }
});
  
export default config;