import { Configuration } from "webpack";
// import dotenv from 'dotenv'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./webpackTyping";

export function buildPlugins({ mode, paths }: IBuildOptions): Configuration['plugins'] {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html }),
    // new DefinePlugin({
    //   'process.env': JSON.stringify(dotenv.config().parsed),
    // })
  ]

  if (mode === 'production') {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }))
  }

  return plugins
}