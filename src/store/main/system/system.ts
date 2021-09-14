/*
 * @Description: 系统管理
 * @Author: 安知鱼
 * @Email: 2268025923@qq.com
 * @Date: 2021-09-07 13:48:26
 * @LastEditTime: 2021-09-13 16:17:33
 * @LastEditors: 安知鱼
 */

import { Module } from "vuex";
import { IRootStore } from "./../../type";
import { ISystemState } from "./types";
import {
  editPageData,
  createPageData,
  deletePageData,
  getPageListData,
} from "@/service/main/system/system";

import { ElMessage } from "element-plus";

const systemModule: Module<ISystemState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    };
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList;
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount;
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    },
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    },
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // console.log(payload);

      // 1.获取pageUrl
      const pageName = payload.pageName;
      const pageUrl = `${pageName}/list`;
      // let pageUrl = "";
      // switch (pageName) {
      //   case "users":
      //     pageUrl = "users/list";
      //     break;
      //   case "role":
      //     pageUrl = "role/list";
      //     break;
      // }
      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      console.log(pageResult);

      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data;

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);

      // switch (pageName) {
      //   case 'users':
      //     commit(`changeUserList`, list)
      //     commit(`changeUserCount`, totalCount)
      //     break
      //   case 'role':
      //     commit(`changeRoleList`, list)
      //     commit(`changeRoleCount`, totalCount)
      //     break
      // }
    },
    async deletePageDataAction({ dispatch, rootState }, payload: any) {
      // 1.获取pageName和id
      // pageName -> /users
      // id -> /users/id
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      // 2.调用删除网络请求
      await deletePageData(pageUrl);
      ElMessage({
        type: "success",
        message: "删除成功!",
      });

      // 3.重新请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...rootState.queryInfo,
        },
      });
    },
    async createPageDataAction({ dispatch, rootState }, payload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);
      ElMessage({
        type: "success",
        message: "增加成功!",
      });

      // 2.请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...rootState.queryInfo,
        },
      });
    },

    async editPageDataAction({ dispatch, rootState }, payload: any) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);
      ElMessage({
        type: "success",
        message: "编辑成功!",
      });

      // 2.请求最新的数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...rootState.queryInfo,
        },
      });
    },
  },
};

export default systemModule;
