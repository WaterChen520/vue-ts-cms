module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "element-plus",
        // 引入组件
        customName: (name) => {
          name = name.slice(3);
          return `element-plus/lib/components/${name}`;
        },
        // 引入样式
        customStyleName: (name) => {
          name = name.slice(3);
          return `element-plus/lib/components/${name}/style/css`;
        },
      },
    ],
  ],
  presets: ["@vue/cli-plugin-babel/preset"],
};
