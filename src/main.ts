import {
  VueQueryPlugin,
} from "@tanstack/vue-query";
import {
  createPinia,
} from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import {
  createApp,
} from "vue";
import app from "./app.vue";
import {
  queryClient,
} from "./shared/lib/query-client";
import "./shared/main.css";

const pinia = createPinia().use(piniaPluginPersistedstate);
const vueApp = createApp(app);

vueApp.use(pinia);

vueApp.use(
  VueQueryPlugin,
  {
    queryClient,
  },
);

vueApp.mount("#app");
