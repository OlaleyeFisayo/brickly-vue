<script lang="ts" setup>
import type {
  ContextMenuContentEmits,
  ContextMenuContentProps,
} from "reka-ui";
import {
  ContextMenuContent,
} from "reka-ui";

defineProps<ContextMenuContentProps>();
defineEmits<ContextMenuContentEmits>();
</script>

<template>
  <ContextMenuContent
    v-bind="$props"
  >
    <slot />
  </ContextMenuContent>
</template>
