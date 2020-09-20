// const { merge } = require('webpack-merge');
import merge from 'webpack-merge';
import * as webpack from 'webpack';
import common from './webpack.common'
import path from 'path';

const nodeExternals = require('webpack-node-externals');

const config: webpack.Configuration = merge(common, {
  entry: ['webpack/hot/poll?100'],
  mode: 'development',
  externals: [
    nodeExternals({
        allowlist: ['webpack/hot/poll?100']
    })
],
  watch: true,
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
},
});

export default config;