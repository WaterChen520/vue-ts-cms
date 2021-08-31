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

export function setupStore() {
  store.dispatch("login/loadLocalLogin");
}

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
