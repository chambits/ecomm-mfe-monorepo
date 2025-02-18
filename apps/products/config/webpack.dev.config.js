const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("../package.json");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3001,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    publicPath: "auto",
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

module.exports = merge(commonConfig, devConfig);
