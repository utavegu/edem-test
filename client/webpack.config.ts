import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { IBuildPaths, IEnvVariables } from './config/build/webpackTyping';

export default (env: IEnvVariables) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'bundle'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  
  const config: webpack.Configuration = buildWebpack(
    {
      port: env.port ?? 3000,
      mode: env.mode ?? 'development',
      paths
    }
  )

  return config;
};
