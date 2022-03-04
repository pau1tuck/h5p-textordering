/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/entries/main.ts",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "h5p-textordering.js",
  },
};

export default config;
