/*
 * @Description:ElmentUi注册
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 13:10:15
 * @LastEditTime: 2021-08-29 16:52:32
 * @LastEditors: 安知鱼
 */

import { App } from "vue";
// 方式一：全局引入
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

// export default (app: App): void => {
//   app.use(ElementPlus);
// };

// 方式二：局部引入
import {
  ElButton,
  ElTabs,
  ElInput,
  ElLink,
  ElForm,
  ElCheckbox,
} from "element-plus";
const components = [ElButton, ElTabs, ElInput, ElLink, ElForm, ElCheckbox];

export default function (app: App): void {
  for (const cpn of components) {
    app.use(cpn);
  }
}
