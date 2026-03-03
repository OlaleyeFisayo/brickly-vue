<script lang="ts" setup>
import type {
  AppInputType,
} from "@shared/types";
import type {
  FileTreeNode,
} from "@vast/file-explorer";
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
  dummyFileEntryNodeFolder,
} from "../variables";
import FileEntryTemplate from "./file-entry-template.vue";

const props = defineProps<{
  node?: FileTreeNode;
}>();

const fileTreeStore = useFileTreeStore();

const newFolderName = ref("");
const createFolderRef = ref<AppInputType | null>(null);
const create = useCreate();

onMounted(() => {
  nextTick(() => {
    createFolderRef.value?.focus();
  });
});

function resetAndBlur() {
  newFolderName.value = "";
  fileTreeStore.disableCreateMode();
}

async function handleFolderCreate() {
  if (newFolderName.value.trim()) {
    await create.mutateAsync(
      {
        type: "directory",
        name: newFolderName.value,
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
  <FileEntryTemplate :node="dummyFileEntryNodeFolder">
    <AppInput
      ref="createFolderRef"
      v-model="newFolderName"
      @blur="resetAndBlur"
      @keydown.enter="handleFolderCreate"
      @keydown.escape="resetAndBlur"
    />
  </FileEntryTemplate>
</template>
