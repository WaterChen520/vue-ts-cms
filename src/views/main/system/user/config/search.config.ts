/*
 * @Description: 搜索表单配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-05 19:03:58
 * @LastEditTime: 2021-09-05 19:13:23
 * @LastEditors: 安知鱼
 */
import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemLayout: {
    padding: "10px 20px",
  },
  colLayout: {
    span: 8,
  },
  formItems: [
    {
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      type: "select",
      label: "喜欢的角色",
      placeholder: "请输入喜欢的角色",
      options: [
        { title: "可莉", value: "keli" },
        { title: "甘雨", value: "ganyu" },
      ],
    },
    {
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "开始时间",
        type: "daterange",
        clearable: true,
        editable: false,
      },
    },
  ],
};
