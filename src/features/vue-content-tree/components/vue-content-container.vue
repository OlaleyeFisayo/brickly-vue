<script lang="ts" setup>
import type {
  ParsedVueFile,
} from "@brickly/parser/vue";
import {
  parse,
} from "@brickly/parser/vue";
import {
  useSearchParams,
} from "@shared/hooks/use-search-params";
import {
  computed,
  ref,
  watch,
} from "vue";
import {
  useGetFileContent,
} from "../queries";
import VueContentContainerActions from "./vue-content-container-actions.vue";
import VueContentTree from "./vue-content-tree.vue";

const params = useSearchParams();
const filePath = computed(() => params.vueFile);

const {
  data: fileContent,
} = useGetFileContent(filePath);

const vueData = ref<ParsedVueFile | null>(null);

watch(
  () => fileContent.value,
  (newFileContent) => {
    if (newFileContent) {
      vueData.value = parse(newFileContent);
    }
  },
);
</script>

<template>
  <div
    v-show="params.vueFile"
    class="w-67.5 h-full bg-primary-500 border-r border-primary-700 text-primary-800 flex flex-col"
  >
    <VueContentContainerActions />
    <VueContentTree :template="vueData?.template" />
  </div>
</template>
