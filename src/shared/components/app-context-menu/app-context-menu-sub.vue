<script lang="ts" setup>
import type {
  ContextMenuSubEmits,
  ContextMenuSubProps,
} from "reka-ui";
import {
  ContextMenuSub,
} from "reka-ui";

defineProps<ContextMenuSubProps>();
defineEmits<ContextMenuSubEmits>();
</script>

<template>
  <ContextMenuSub v-bind="$props">
    <slot />
  </ContextMenuSub>
</template>
