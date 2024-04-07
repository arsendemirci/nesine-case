const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "9500",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    /**aliaslar module import ederken kullaniliyor, relative path kullanmamak icin. */
    alias: {
      "#components": path.resolve(__dirname, "src/components/"),
      "#arrayUtils": path.resolve(__dirname, "src/utils/arrayUtils.js"),
      "#couponContext": path.resolve(__dirname, "src/state/CouponContext.jsx"),
      "#data": path.resolve(__dirname, "src/data/data.json"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
