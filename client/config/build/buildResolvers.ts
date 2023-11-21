import { Configuration } from "webpack";
import { IBuildOptions } from "./webpackTyping";

export function buildResolvers(options: IBuildOptions):Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}