<script lang="ts" setup>
import {
  useSearchParams,
} from "@shared/hooks/use-search-params";
import {
  IconX,
} from "@tabler/icons-vue";

const params = useSearchParams();

function handleCloseVueContentContainer() {
  params.vueFile = "";
}
</script>

<template>
  <div class="p-3.5 flex items-center justify-end border-b border-primary-700">
    <button
      class="cursor-pointer hover:bg-primary-200 p-1.5"
      @click="handleCloseVueContentContainer"
    >
      <IconX />
    </button>
  </div>
</template>
