<script lang="ts" setup>
import FileTreeContainerActions from "./file-tree-container-actions.vue";
import FileTree from "./file-tree.vue";
</script>

<template>
  <main
    class="w-full space-y-2 h-full flex flex-col"
  >
    <FileTreeContainerActions />
    <FileTree />
  </main>
</template>
