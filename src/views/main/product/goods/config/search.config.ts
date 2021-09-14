/*
 * @Description: 搜索表单配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-05 19:03:58
 * @LastEditTime: 2021-09-12 18:09:51
 * @LastEditors: 安知鱼
 */
import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
  labelWidth: "100px",
  itemStyle: {
    padding: "10px 20px",
  },
  colLayout: {
    span: 8,
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称",
    },
    {
      field: "oldPrice",
      type: "input",
      label: "原价格",
      placeholder: "请输入真原价格",
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      field: "status",
      type: "select",
      label: "商品状态",
      placeholder: "请选择商品状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 },
      ],
    },
    {
      field: "createAt",
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
