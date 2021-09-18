/*
 * @Description: goods内容配置文件
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-10 15:02:21
 * @LastEditTime: 2021-09-13 09:20:45
 * @LastEditors: 安知鱼
 */

export const contentTableConfig = {
  title: '商品列表',
  headerHandler: {
    increase: '新建商品',
    removeAll: '批量删除'
  },
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '80' },
    // { prop: "inventoryCount", label: "库存", minWidth: "80" },
    { prop: 'saleCount', label: '销售额', minWidth: '80' },
    // { prop: "favorCount", label: "畅销额", minWidth: "80" },
    // { prop: "address", label: "发货地址", minWidth: "80" },
    { prop: 'imgUrl', label: '图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    // { prop: "desc", label: "描述", minWidth: "100" },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
