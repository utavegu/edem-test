import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './webpackTyping';

export function buildWebpack(options: IBuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: mode === 'development' && 'inline-source-map',
    devServer:  mode === 'development' ? buildDevServer(options) : undefined,
  }
}