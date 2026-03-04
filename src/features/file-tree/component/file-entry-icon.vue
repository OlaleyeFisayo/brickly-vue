<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  IconFile,
} from "@tabler/icons-vue";
import {
  FILE_TREE_STATES,
} from "../variables";

defineProps<{
  node: FileTreeNode;
}>();
</script>

<template>
  <IconFile
    v-if="node.type === 'file'"
    :style="{ width: FILE_TREE_STATES.iconSize, height: FILE_TREE_STATES.iconSize }"
    class="text-primary-800 shrink-0"
  />
</template>
