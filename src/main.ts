import { createApp } from "vue";
import { globalRegister } from "./global";
import { setupStore } from "./store";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css";
import "./assets/css//index.css";

const app = createApp(App);
// 注册动态路由(注意必须在 app.use(router) 之前调用)
// 原因：app.use(router) 会匹配将要跳转的路由 如果在这一步之后再注册动态路由 匹配到的路由将永远是not-found
setupStore();
app.use(store).use(router).use(globalRegister).mount("#app");

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
