<script lang="ts" setup>
import type {
  ContextMenuItemIndicatorProps,
} from "reka-ui";
import {
  ContextMenuItemIndicator,
} from "reka-ui";

defineProps<ContextMenuItemIndicatorProps>();
</script>

<template>
  <ContextMenuItemIndicator v-bind="$props">
    <slot />
  </ContextMenuItemIndicator>
</template>
