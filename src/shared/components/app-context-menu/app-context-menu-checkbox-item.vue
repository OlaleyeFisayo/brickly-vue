<script lang="ts" setup>
import type {
  ContextMenuCheckboxItemEmits,
  ContextMenuCheckboxItemProps,
} from "reka-ui";
import {
  ContextMenuCheckboxItem,
} from "reka-ui";

defineProps<ContextMenuCheckboxItemProps>();
defineEmits<ContextMenuCheckboxItemEmits>();
</script>

<template>
  <ContextMenuCheckboxItem
    v-bind="$props"
  >
    <slot />
  </ContextMenuCheckboxItem>
</template>
