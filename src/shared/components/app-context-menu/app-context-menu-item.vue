<script lang="ts" setup>
import type {
  ContextMenuItemEmits,
  ContextMenuItemProps,
} from "reka-ui";
import {
  ContextMenuItem,
} from "reka-ui";

defineProps<ContextMenuItemProps>();
defineEmits<ContextMenuItemEmits>();
</script>

<template>
  <ContextMenuItem
    v-bind="$props"
  >
    <slot />
  </ContextMenuItem>
</template>
