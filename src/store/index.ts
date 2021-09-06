import { createStore, Store, useStore as useVuexStore } from "vuex";

import { IRootStore, IStoreType } from "./type";

import login from "./login/login";

const store = createStore<IRootStore>({
  state() {
    return {
      name: "anzhiyu",
      age: 18,
    };
  },
  mutations: {},
  actions: {},
  modules: {
    login,
  },
});

// 注册动态路由
export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

// 解决Vuex中useStore类型问题(比如：子模块中的类型不能识别)
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
