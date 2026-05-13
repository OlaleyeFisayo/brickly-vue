import {
  setup,
} from "virtual:brickly-setup";
import {
  createApp,
} from "vue";
import {
  useSearchParams,
} from "./shared/hooks/use-search-params";

const {
  vueFile,
} = useSearchParams();

if (vueFile) {
  import(/* @vite-ignore */ `/${vueFile}`).then((module) => {
    const app = createApp(module.default);
    setup(app);
    app.mount("#app");
  });
}
