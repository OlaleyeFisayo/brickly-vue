<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  useCollapseDirectory,
  useExpandDirectory,
} from "../api";
import {
  useFileExplorerStore,
} from "../store";
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
const fileExplorerStore = useFileExplorerStore();

function setSelectedNode(
  node: FileTreeNode,
  event: MouseEvent,
) {
  const nodeSnapshot = {
    ...node,
  };
  const isDirectory = nodeSnapshot.type === "directory";
  if (isDirectory) {
    nodeSnapshot.expanded = !nodeSnapshot.expanded;
  }
  const isMultiSelect = event.ctrlKey || event.metaKey;
  if (isMultiSelect) {
    fileExplorerStore.toggleSelectedNode(nodeSnapshot);
  }
  else {
    fileExplorerStore.setSelectedNode(nodeSnapshot);
  }
}

async function handleNodeClick(
  node: FileTreeNode,
  event: MouseEvent,
) {
  const isDirectory = node.type === "directory";
  if (isDirectory) {
    node.expanded ? await collapseDirectory(node.absolutePath) : await expandDirectory(node.absolutePath);
  }
  setSelectedNode(
    node,
    event,
  );
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
        @click="handleNodeClick(node, $event)"
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
