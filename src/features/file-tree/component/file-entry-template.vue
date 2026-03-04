<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  computed,
  ref,
} from "vue";
import {
  useFileTreeStore,
} from "../store";
import FileEntryIcon from "./file-entry-icon.vue";
import FolderToggleIcon from "./folder-toggle-icon.vue";

defineProps<{
  node: FileTreeNode;
}>();

const rootEl = ref<HTMLDivElement | null>(null);

const fileTreeStore = useFileTreeStore();

const highlightConditions = computed(() => {
  return !fileTreeStore.DragAndDropData.isDragging && !fileTreeStore.renameData;
});

defineExpose({
  $el: rootEl,
});
</script>

<template>
  <div
    ref="rootEl"
    v-bind="$attrs"
    class="cursor-pointer flex py-0.5 px-1 items-center gap-1 text-primary-800"
    :class="[
      // Show focus state when the file or folder is selected
      node.key === fileTreeStore.selectedNode?.key && highlightConditions && 'bg-primary-100! ring-primary-1000 ring-1',
      highlightConditions && 'hover:bg-primary-200',
    ]"
  >
    <FolderToggleIcon :node="node" />
    <FileEntryIcon :node="node" />
    <slot />
  </div>
</template>
