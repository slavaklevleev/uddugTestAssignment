var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const PUBLIC_PATH = env.PUBLIC_PATH || '/';
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
      publicPath: PUBLIC_PATH,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|svg)$/,
          use: ["url-loader"],
        },
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
  };
};
