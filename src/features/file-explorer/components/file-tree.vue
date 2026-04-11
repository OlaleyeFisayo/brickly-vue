<script lang="ts" setup>
import {
  useQuery,
} from "@tanstack/vue-query";
import {
  rootInfoQueryOptions,
} from "../api";
import FileTreeActions from "./file-tree-actions.vue";

const {
  data: rootInfo,
} = useQuery(rootInfoQueryOptions());
</script>

<template>
  <section class="bg-background-100 w-65 px-4 py-3 flex flex-col gap-2">
    <header class="flex items-center justify-between">
      <h1 class="uppercase text-primary-300 text-xs">
        {{ rootInfo?.basename }}
      </h1>
      <FileTreeActions />
    </header>
    <main class="w-full border flex-1" />
  </section>
</template>
