import { createApp } from "vue";
import { globalRegister } from "./global";
import { setupStore } from "./store";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css";
import "./assets/css//index.css";

setupStore();
const app = createApp(App);
app.use(store).use(router).use(globalRegister).mount("#app");

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
