<script lang="ts" setup>
import type {
  ContextMenuArrowProps,
} from "reka-ui";
import {
  ContextMenuArrow,
} from "reka-ui";

defineProps<ContextMenuArrowProps>();
</script>

<template>
  <ContextMenuArrow v-bind="$props" />
</template>
