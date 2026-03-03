<script lang="ts" setup>
import type {
  ContextMenuSubContentEmits,
  ContextMenuSubContentProps,
} from "reka-ui";
import {
  ContextMenuSubContent,
} from "reka-ui";

defineProps<ContextMenuSubContentProps>();
defineEmits<ContextMenuSubContentEmits>();
</script>

<template>
  <ContextMenuSubContent
    v-bind="$props"
  >
    <slot />
  </ContextMenuSubContent>
</template>
