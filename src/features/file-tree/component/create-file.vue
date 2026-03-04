<script lang="ts" setup>
import type {
  FileTreeNode,
} from "@brickly/file-explorer";
import type {
  AppInputType,
} from "@shared/types";
import AppInput from "@shared/components/app-input.vue";
import {
  nextTick,
  onMounted,
  ref,
} from "vue";
import {
  getFolderPath,
} from "../composables/get-folder-path";
import {
  useCreate,
} from "../queries";
import {
  useFileTreeStore,
} from "../store";
import {
  dummyFileEntryNodeFile,
} from "../variables";
import FileEntryTemplate from "./file-entry-template.vue";

const props = defineProps<{
  node?: FileTreeNode;
}>();

const fileTreeStore = useFileTreeStore();

const newFileName = ref("");
const createFileRef = ref<AppInputType | null>(null);
const create = useCreate();

onMounted(() => {
  nextTick(() => {
    createFileRef.value?.focus();
  });
});

function resetAndBlur() {
  newFileName.value = "";
  fileTreeStore.disableCreateMode();
}

async function handleFileCreate() {
  if (newFileName.value.trim()) {
    await create.mutateAsync(
      {
        type: "file",
        name: newFileName.value,
        path: props.node ? getFolderPath(props.node) : undefined,
      },
      {
        onSuccess: () => resetAndBlur(),
      },
    );
  }
}
</script>

<template>
  <FileEntryTemplate :node="dummyFileEntryNodeFile">
    <AppInput
      ref="createFileRef"
      v-model="newFileName"
      @blur="resetAndBlur"
      @keydown.enter="handleFileCreate"
      @keydown.escape="resetAndBlur"
    />
  </FileEntryTemplate>
</template>
