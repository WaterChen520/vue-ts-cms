/*
 * @Description:vue(webpack)配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 11:20:29
 * @LastEditTime: 2021-08-30 13:32:22
 * @LastEditors: 安知鱼
 */
const path = require("path");

module.exports = {
  // 方式一：直接通过CLI提供给我们的选项来配置
  outputDir: "./dist",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  // 方式二：通过configureWebpack修改webpack的配置
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: "@/components",
  //     },
  //   },
  // },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components",
  //   };
  // },

  // 方式三：通过chainWebpack修改webpack的配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components");
  },
};
