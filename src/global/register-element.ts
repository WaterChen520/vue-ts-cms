/*
 * @Description:ElmentUi注册
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 13:10:15
 * @LastEditTime: 2021-09-07 15:24:05
 * @LastEditors: 安知鱼
 */

import { App } from "vue";

// 默认使用中文
import zhCn from "element-plus/es/locale/lang/zh-cn";

// 方式一：全局引入
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

export default (app: App): void => {
  app.use(ElementPlus, {
    locale: zhCn,
  });
};

// 方式二：局部引入 (注意babel.config.js中需引入插件babel-plugin-import)
// import {
//   ElButton,
//   ElTabs,
//   ElInput,
//   ElLink,
//   ElForm,
//   ElCheckbox,
//   ElContainer,
//   ElMenu,
//   ElDropdown,
//   ElAvatar,
//   ElSelect,
//   ElDatePicker,
//   ElCard,
//   ElCol,
//   ElRow,
//   ElBreadcrumb,
//   ElTable,
// } from "element-plus";

// const components = [
//   ElButton,
//   ElTabs,
//   ElInput,
//   ElLink,
//   ElForm,
//   ElCheckbox,
//   ElContainer,
//   ElMenu,
//   ElDropdown,
//   ElAvatar,
//   ElSelect,
//   ElDatePicker,
//   ElCard,
//   ElCol,
//   ElRow,
//   ElBreadcrumb,
//   ElTable,
// ];

// export default function (app: App): void {
//   for (const cpn of components) {
//     app.use(cpn, {
//       locale: zhCn,
//     });
//   }
// }
