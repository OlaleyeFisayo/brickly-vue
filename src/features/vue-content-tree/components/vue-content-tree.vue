<script lang="ts" setup>
import type {
  VueNode,
} from "@brickly/parser/vue";

defineProps<{
  template?: Array<VueNode>;
}>();
</script>

<template>
  <section class="w-full px-2 pb-2 overflow-x-hidden overflow-y-auto flex-1">
    {{ template }}
  </section>
</template>
