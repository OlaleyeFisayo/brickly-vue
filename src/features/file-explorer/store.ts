import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  defineStore,
} from "pinia";
import {
  ref,
} from "vue";

export const useFileExplorerStore = defineStore(
  "file-explorer",
  () => {
    const selectedNodes = ref<FileTreeNode[]>([]);

    function setSelectedNode(node: FileTreeNode) {
      selectedNodes.value = [node];
    }

    function toggleSelectedNode(node: FileTreeNode) {
      const idx = selectedNodes.value.findIndex(n => n.key === node.key);
      if (idx === -1) {
        selectedNodes.value = [...selectedNodes.value, node];
      }
      else {
        selectedNodes.value = selectedNodes.value.filter(n => n.key !== node.key);
      }
    }

    return {
      selectedNodes,
      setSelectedNode,
      toggleSelectedNode,
    };
  },
  {
    persist: {
      key: "brickly:selectedNodes",
      pick: ["selectedNodes"],
    },
  },
);
