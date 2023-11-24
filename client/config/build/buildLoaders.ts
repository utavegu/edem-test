import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildOptions } from "./webpackTyping";

export function buildLoaders({ mode }: IBuildOptions): ModuleOptions['rules'] {

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  // const svgrLoader = {
  //   test: /\.svg$/i,
  //   use: [
  //     {
  //       loader: '@svgr/webpack',
  //       options: {
  //         icon: true,
  //         svgoConfig: {
  //           plugins: [
  //             {
  //               name: 'convertColors',
  //               params: {
  //                 currentColor: true,
  //               }
  //             }
  //           ]
  //         }
  //       }
  //     }
  //   ],
  // }

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: mode === 'development' ? '[path][name]__[local]' : '[hash:base64:7]',
      },
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      mode === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    assetLoader,
    scssLoader,
    tsLoader,
    // svgrLoader,
  ]
}