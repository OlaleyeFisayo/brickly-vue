<script lang="ts" setup>
import type {
  ContextMenuItemEmits,
  ContextMenuItemProps,
} from "reka-ui";

defineProps<ContextMenuItemProps>();
defineEmits<ContextMenuItemEmits>();
</script>

<template>
  <ContextMenuItem
    v-bind="$props"
    class="px-2 py-1 cursor-pointer hover:bg-primary-200 rounded-sm text-primary-800 outline-none!"
  >
    <slot />
  </ContextMenuItem>
</template>
