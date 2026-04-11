<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import type {
  ClassValue,
} from "clsx";
import type {
  LucideProps,
} from "lucide-vue-next";
import type {
  FunctionalComponent,
} from "vue";
import {
  Code,
  FileText,
  Folder,
  FolderOpen,
} from "lucide-vue-next";
import {
  computed,
} from "vue";
import {
  cn,
} from "@/shared/lib/utils";

const props = defineProps<{
  node: FileTreeNode;
}>();

type FileIcon = {
  Icon: FunctionalComponent<LucideProps>;
  class: ClassValue;
};

function getFileIcon(): FileIcon {
  const node = props.node;
  const isDirectory = node.type === "directory";

  if (isDirectory && node.expanded) {
    return {
      Icon: FolderOpen,
      class: "text-primary-500",
    };
  }
  else if (isDirectory && !node.expanded) {
    return {
      Icon: Folder,
      class: "text-primary-500",
    };
  }
  else if (!isDirectory && node.extension === "vue") {
    return {
      Icon: Code,
      class: "text-primary-200",
    };
  }
  return {
    Icon: FileText,
    class: "text-primary-200",
  };
}

const fileIcon = computed(() => getFileIcon());
</script>

<template>
  <div class="w-4.5 h-3.5 shrink-0">
    <component
      :is="fileIcon.Icon"
      :class="cn('w-full h-full', fileIcon.class)"
    />
  </div>
</template>
