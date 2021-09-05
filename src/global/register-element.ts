/*
 * @Description:ElmentUi注册
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 13:10:15
 * @LastEditTime: 2021-09-05 16:00:29
 * @LastEditors: 安知鱼
 */

import { App } from "vue";
// 方式一：全局引入
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

// export default (app: App): void => {
//   app.use(ElementPlus);
// };

// 方式二：局部引入 (注意babel.config.js中需引入插件babel-plugin-import)
import {
  ElButton,
  ElTabs,
  ElInput,
  ElLink,
  ElForm,
  ElCheckbox,
  ElContainer,
  ElMenu,
  ElDropdown,
  ElAvatar,
} from "element-plus";

const components = [
  ElButton,
  ElTabs,
  ElInput,
  ElLink,
  ElForm,
  ElCheckbox,
  ElContainer,
  ElMenu,
  ElDropdown,
  ElAvatar,
];

export default function (app: App): void {
  for (const cpn of components) {
    app.use(cpn);
  }
}
