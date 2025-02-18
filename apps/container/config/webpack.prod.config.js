const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("../package.json");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  entry: "./src/index.tsx",
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: `products@${domain}/products/latest/remoteEntry.js`,
        cart: `cart@${domain}/cart/latest/remoteEntry.js`,
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
