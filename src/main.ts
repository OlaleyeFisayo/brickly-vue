import {
  VueQueryPlugin,
} from "@tanstack/vue-query";
import {
  createPinia,
} from "pinia";
import PrimeVue from "primevue/config";
import {
  createApp,
} from "vue";
import app from "./app.vue";
import {
  PrimeVueConfig,
} from "./shared/utils/prime-vue-config";
import {
  queryClient,
} from "./shared/utils/query-client";
import "./style.css";

const pinia = createPinia();
const vueApp = createApp(app);

vueApp.use(pinia);

// Tanstack Query — global error handler toasts all mutation errors
vueApp.use(
  VueQueryPlugin,
  {
    queryClient,
  },
);

// Prime Vue Configs
vueApp.use(
  PrimeVue,
  PrimeVueConfig,
);

vueApp.mount("#app");
