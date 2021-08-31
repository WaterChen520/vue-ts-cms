/*
 * @Description: login状态管理
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-08-30 10:27:31
 * @LastEditTime: 2021-08-31 09:48:19
 * @LastEditors: 安知鱼
 */
import { Module } from "vuex";

import Cache from "@/utils/cache";
import router from "@/router";

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById,
} from "@/service/login/login";

import { IAccount } from "@/service/login/type";
import { ILoginState } from "./type";
import { IRootStore } from "../type";

const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
    },
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现账号密码登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit("changeToken", token);
      Cache.setCache("token", token);

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      Cache.setCache("userInfo", userInfo);

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusById(userInfo.role.id);
      const userMenus = userMenusResult.data;
      commit("changeUserMenus", userMenus);
      Cache.setCache("userMenus", userMenus);

      // 4.跳转首页
      router.push("/main");
    },
    loadLocalLogin({ commit }) {
      const token = Cache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = Cache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = Cache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
        console.log(userMenus);
      }
    },
    // phoneLoginAction({ commit }, payload: IAccount) {
    //   // 1. 实现登录逻辑
    //   const loginResult = await accountLoginRequest(payload);
    // },
  },
};

export default loginModule;
