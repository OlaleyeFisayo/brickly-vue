<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-vue-next";

defineProps<{
  node: FileTreeNode;
}>();
</script>

<template>
  <div
    class="w-3 h-3 shrink-0"
  >
    <template v-if="node.type === 'directory'">
      <component
        :is="!node.expanded ? ChevronRight : ChevronDown"
        class="w-full h-full"
      />
    </template>
  </div>
</template>
