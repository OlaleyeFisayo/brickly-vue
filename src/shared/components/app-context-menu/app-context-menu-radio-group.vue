<script lang="ts" setup>
import type {
  ContextMenuRadioGroupEmits,
  ContextMenuRadioGroupProps,
} from "reka-ui";
import {
  ContextMenuRadioGroup,
} from "reka-ui";

defineProps<ContextMenuRadioGroupProps>();
defineEmits<ContextMenuRadioGroupEmits>();
</script>

<template>
  <ContextMenuRadioGroup v-bind="$props">
    <slot />
  </ContextMenuRadioGroup>
</template>
