import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Cache from "@/utils/cache";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/main",
    component: () => import("../views/main/main.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = Cache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
});

export default router;
