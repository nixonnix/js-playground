const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (env, argv) => {
  console.log("wohoooo...");
  console.log(argv);
  return {
    mode: argv.mode,
    output: {
      filename: "bundle.js",
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
