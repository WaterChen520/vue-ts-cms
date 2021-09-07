/*
 * @Description: 系统管理
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 13:48:26
 * @LastEditTime: 2021-09-07 15:11:48
 * @LastEditors: 安知鱼
 */

import { Module } from "vuex";
import { IRootStore } from "./../../type";
import { ISystemState } from "./types";
import { getPageListData } from "@/service/main/system/system";

const systemModule: Module<ISystemState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    };
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    },
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1.对页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      );
      const { list, totalCount } = pageResult.data;
      commit("changeUserList", list);
      commit("changeUserCount", totalCount);
    },
  },
};

export default systemModule;
