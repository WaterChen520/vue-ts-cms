/*
 * @Description: 数据分析
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-14 16:32:54
 * @LastEditTime: 2021-09-16 15:52:45
 * @LastEditors: 安知鱼
 */
import { Module } from 'vuex'

import { IDashboardState } from './types'
import { IRootStore } from '../../type'

import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeTopPanelDatas(state, list) {
      state.topPanelDatas = list
    },
    changeCategoryGoodsCount(state, categoryGoodsCount) {
      state.categoryGoodsCount = categoryGoodsCount
    },
    changeCategoryGoodsSale(state, categoryGoodsSale) {
      state.categoryGoodsSale = categoryGoodsSale
    },
    changeCategoryGoodsFavor(state, categoryGoodsFavor) {
      state.categoryGoodsFavor = categoryGoodsFavor
    },
    changeAddressGoodsSale(state, addressGoodsSale) {
      state.addressGoodsSale = addressGoodsSale
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const resultTopPanelDatas = await getAmountList()
      commit('changeTopPanelDatas', resultTopPanelDatas)

      const categoryGoodsCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)

      const categoryGoodsSaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSaleResult.data)

      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)

      const addressGoodsSaleResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule
