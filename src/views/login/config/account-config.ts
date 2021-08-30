/*
 * @Description: 账号登录配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-29 16:49:27
 * @LastEditTime: 2021-08-29 16:49:27
 * @LastEditors: 安知鱼
 */

// 编写好规则
export const rules = {
  name: [
    {
      required: true,
      message: "用户名是必传内容~",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5~10个字母或者数字~",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码是必传内容~",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "用户名必须是3位以上的字母或者数字~",
      trigger: "blur",
    },
  ],
};
