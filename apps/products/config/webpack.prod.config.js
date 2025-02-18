const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("../package.json");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const prodConfig = {
  entry: "./src/index.tsx",
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/products/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductList": "./src/ProductList",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
