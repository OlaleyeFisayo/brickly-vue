<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  cn,
} from "@/shared/lib/utils";
import {
  useFileExplorerStore,
} from "../store";
import FileTreeNodeIcon from "./file-tree-node-icon.vue";
import FolderToggleIcon from "./folder-toggle-icon.vue";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  node: FileTreeNode;
}>();

const fileExplorerStore = useFileExplorerStore();
</script>

<template>
  <button
    v-bind="$attrs"
    class="w-full flex items-center transition-all hover:bg-primary-400 cursor-pointer gap-0.5 py-0.5"
    :class="cn(
      fileExplorerStore.selectedNodes.some(n => n.key === node.key) && 'border-primary-200 bg-primary-400',
    )"
  >
    <FolderToggleIcon :node="node" />
    <FileTreeNodeIcon :node="node" />
    <slot />
  </button>
</template>
