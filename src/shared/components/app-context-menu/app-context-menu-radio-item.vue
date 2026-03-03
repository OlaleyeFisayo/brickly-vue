<script lang="ts" setup>
import type {
  ContextMenuRadioItemEmits,
  ContextMenuRadioItemProps,
} from "reka-ui";
import {
  ContextMenuRadioItem,
} from "reka-ui";

defineProps<ContextMenuRadioItemProps>();
defineEmits<ContextMenuRadioItemEmits>();
</script>

<template>
  <ContextMenuRadioItem
    v-bind="$props"
  >
    <slot />
  </ContextMenuRadioItem>
</template>
