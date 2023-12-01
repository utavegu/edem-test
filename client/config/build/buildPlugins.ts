import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./webpackTyping";

export function buildPlugins({ mode, paths }: IBuildOptions): Configuration['plugins'] {
  // На перспективу, в данных реалиях это излишне
  // const isProduction = mode === 'production';
  // const envFile = '.env';
  // const envFile = isProduction ? '.env.production' : '.env.development';
  const envPath = paths.environment
  const envVars = require('dotenv').config({ path: envPath }).parsed || {};

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new DefinePlugin({
      'process.env': JSON.stringify(envVars),
    }),
  ]

  if (mode === 'production') {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }))
  }

  return plugins
}
