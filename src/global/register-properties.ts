/*
 * @Description: 注册全局属性
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 09:25:44
 * @LastEditTime: 2021-09-10 09:56:04
 * @LastEditors: 安知鱼
 */
import { App } from "vue";
import { formatUtcString } from "@/utils/date-format";

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log("foo");
    },
    formatTime(value: string, format: string) {
      return formatUtcString(value, format);
    },
  };
}
