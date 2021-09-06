/*
 * @Description: 搜索表单配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-05 19:03:58
 * @LastEditTime: 2021-09-06 16:00:52
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
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id",
    },
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      field: "spord",
      type: "select",
      label: "喜欢的角色",
      placeholder: "请输入喜欢的角色",
      options: [
        { title: "可莉", value: "keli" },
        { title: "甘雨", value: "ganyu" },
      ],
    },
    {
      field: "createTime",
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
