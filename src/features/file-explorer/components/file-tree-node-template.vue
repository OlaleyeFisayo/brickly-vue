<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import FileTreeNodeIcon from "./file-tree-node-icon.vue";
import FolderToggleIcon from "./folder-toggle-icon.vue";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  node: FileTreeNode;
}>();
</script>

<template>
  <button
    v-bind="$attrs"
    class="w-full flex items-center transition-colors hover:bg-primary-400 cursor-pointer gap-0.5 py-0.5"
  >
    <FolderToggleIcon :node="node" />
    <FileTreeNodeIcon :node="node" />
    <slot />
  </button>
</template>
