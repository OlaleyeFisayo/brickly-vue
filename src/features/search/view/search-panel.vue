<script setup lang="ts">
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import {
  useQuery,
} from "@tanstack/vue-query";
import {
  refDebounced,
} from "@vueuse/core";
import {
  computed,
  ref,
} from "vue";
import {
  useExpandDirectory,
} from "@/features/file-explorer/api";
import FileTreeNodeIcon from "@/features/file-explorer/components/file-tree-node-icon.vue";
import {
  useFileExplorerStore,
} from "@/features/file-explorer/store";
import {
  usePanelMenuStore,
} from "@/features/panel-menu/store";
import {
  ScrollArea,
} from "@/shared/components/ui/scroll-area";
import {
  useSearchFiles,
} from "../api";
import SearchInput from "../components/search-input.vue";

const query = ref("");
const debouncedQuery = refDebounced(
  query,
  1000,
);
const {
  data: results,
  isFetching,
} = useQuery(useSearchFiles(debouncedQuery));

const fileResults = computed(() => results.value?.filter(n => n.type === "file") ?? []);

const fileExplorerStore = useFileExplorerStore();
const panelMenuStore = usePanelMenuStore();
const {
  mutateAsync: expandDirectory,
} = useExpandDirectory();

async function navigateToFile(node: FileTreeNode) {
  const sep = node.path.includes("/") ? "/" : "\\";
  const rootPrefix = node.absolutePath.slice(
    0,
    node.absolutePath.length - node.path.length,
  );
  const segments = node.path.split(sep).slice(
    0,
    -1,
  );

  for (let i = 0; i < segments.length; i++) {
    const ancestorPath = rootPrefix + segments.slice(
      0,
      i + 1,
    ).join(sep);
    await expandDirectory(ancestorPath);
  }

  panelMenuStore.setActivePanel("file-explorer");
  fileExplorerStore.setSelectedNode(node);
}
</script>

<template>
  <div class="flex flex-col h-full space-y-2">
    <div class="border-b pb-2">
      <SearchInput v-model="query" />
    </div>

    <div
      v-if="isFetching"
      class="p-2 text-xs text-muted-foreground"
    >
      Searching...
    </div>

    <ScrollArea
      v-else-if="fileResults.length > 0"
      class="overflow-x-hidden"
    >
      <button
        v-for="node in fileResults"
        :key="node.key"
        class="w-full flex items-center gap-1.5 px-2 py-1 hover:bg-primary-400 transition-all cursor-pointer"
        @click="navigateToFile(node)"
      >
        <FileTreeNodeIcon :node="node" />
        <div class="flex flex-col text-left min-w-0 justify-start">
          <span class="text-sm truncate w-full text-white p-0">{{ node.name }}</span>
          <span class="text-xs text-muted-foreground truncate w-full">{{ node.key }}</span>
        </div>
      </button>
    </ScrollArea>

    <div
      v-else-if="debouncedQuery && fileResults.length === 0"
      class="p-2 text-xs text-muted-foreground"
    >
      No results for "{{ debouncedQuery }}"
    </div>
  </div>
</template>
