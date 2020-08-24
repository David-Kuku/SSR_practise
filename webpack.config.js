const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  node: {
    fs: "empty",
    net: "empty",
  },
  entry: {
    client: "./src/browser",
    bundle: "./src/bundle.js",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "[name].js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: (url) => url.replace(/public/, ""),
          emit: false,
        },
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] },
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: (url) => url.replace(/public/, ""),
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
