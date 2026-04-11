<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  useCollapseDirectory,
  useExpandDirectory,
} from "../api";
import FileTreeNodeTemplate from "./file-tree-node-template.vue";

withDefaults(
  defineProps<{
    fileTreeNodes?: FileTreeNode[];
  }>(),
  {
    fileTreeNodes: () => [],
  },
);

const {
  mutateAsync: collapseDirectory,
} = useCollapseDirectory();
const {
  mutateAsync: expandDirectory,
} = useExpandDirectory();

async function handleNodeClick(node: FileTreeNode) {
  const isDirectory = node.type === "directory";
  if (isDirectory && !node.expanded) {
    await expandDirectory(node.absolutePath);
  }
  else if (isDirectory && node.expanded) {
    await collapseDirectory(node.absolutePath);
  }
}
</script>

<template>
  <template v-if="fileTreeNodes.length !== 0">
    <div
      v-for="node in fileTreeNodes"
      :key="node.key"
    >
      <FileTreeNodeTemplate
        :node="node"
        @click="handleNodeClick(node)"
      >
        <p class="truncate text-ellipsis text-sm">
          {{ node.name }}
        </p>
      </FileTreeNodeTemplate>
      <div
        v-if="node.type === 'directory' && node.expanded"
        class="ml-3"
      >
        <FileTreeNodes :file-tree-nodes="node.children" />
      </div>
    </div>
  </template>
</template>
