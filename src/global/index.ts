/*
 * @Description:插件引入
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-28 13:06:10
 * @LastEditTime: 2021-08-30 16:20:46
 * @LastEditors: 安知鱼
 */
import { App } from "vue";

import registerElement from "./register-element";

export function globalRegister(app: App): void {
  app.use(registerElement);
}
