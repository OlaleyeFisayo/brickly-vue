<script lang="ts" setup>
import type {
  ContextMenuSubTriggerProps,
} from "reka-ui";
import {
  ContextMenuSubTrigger,
} from "reka-ui";

defineProps<ContextMenuSubTriggerProps>();
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="$props"
  >
    <slot />
  </ContextMenuSubTrigger>
</template>
