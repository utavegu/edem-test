export type BuildModeType = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  html: string;
  output: string;
}

export interface IBuildOptions {
  port: number;
  paths: IBuildPaths;
  mode: BuildModeType;
}

export interface IEnvVariables {
  mode: IBuildOptions['mode'];
  port: number;
}