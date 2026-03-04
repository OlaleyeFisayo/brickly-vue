<script lang="ts" setup>
import {
  ref,
} from "vue";

withDefaults(
  defineProps<{
    type?: HTMLInputElement["type"];
  }>(),
  {
    type: "text",
  },
);

const model = defineModel<string>();
const rootEl = ref<HTMLInputElement | null>(null);

defineExpose({
  focus: () => rootEl.value?.focus(),
});
</script>

<template>
  <input
    ref="rootEl"
    v-bind="$attrs"
    v-model="model"
    :type="type"
    class="py-0 px-1 w-full border border-primary-700 bg-primary-400 focus:border-none"
  >
</template>
