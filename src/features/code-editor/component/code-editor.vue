<script lang="ts" setup>
import type {
  CodemirrorOnReadyPayload,
} from "../types";
import {
  useSearchParams,
} from "@shared/hooks/use-search-params";
import {
  computed,
  ref,
  shallowRef,
  watch,
} from "vue";
import {
  Codemirror,
} from "vue-codemirror";
import {
  useLanguageExtension,
} from "../composables/use-language-extension";
import {
  useGetFileContent,
} from "../queries";
import {
  EDITOR_STATES,
} from "../variables";

const codeMirrorDetails = shallowRef<CodemirrorOnReadyPayload>();
function handleReady(payload: CodemirrorOnReadyPayload) {
  codeMirrorDetails.value = payload;
}

// Get File Content
const params = useSearchParams();
const filePath = computed(() => params.file ?? "");
const languageExtension = useLanguageExtension(filePath);

const {
  data: fileContent,
} = useGetFileContent(filePath);

const code = ref("");

watch(
  () => fileContent.value,
  (newFileContent) => {
    if (newFileContent)
      code.value = newFileContent;
  },
);
</script>

<template>
  <Codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="EDITOR_STATES.style"
    :tab-size="EDITOR_STATES.tabSize"
    :indent-with-tab="EDITOR_STATES.indentWithTab"
    :auto-destroy="true"
    :autofocus="true"
    :extensions="[languageExtension]"
    @ready="handleReady"
  />
</template>
