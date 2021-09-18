/*
 * @Description: 数据分析请求
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-14 16:45:36
 * @LastEditTime: 2021-09-16 15:53:54
 * @LastEditors: 安知鱼
 */
import anRequest from '../../index'

import { IDataType } from '../../types'

enum DashboardAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getAmountList() {
  return anRequest.get({
    url: DashboardAPI.amountList
  })
}

export function getCategoryGoodsCount() {
  return anRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return anRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return anRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return anRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
