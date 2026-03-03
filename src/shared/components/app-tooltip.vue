<script setup lang="ts">
import {
  VAST_APP_STATES,
} from "../variables";

withDefaults(
  defineProps<{
    content: string;
    align?: "start" | "center" | "end";
    side?: "top" | "right" | "bottom" | "left";
  }>(),
  {
    align: "center",
    side: "right",
  },
);
</script>

<template>
  <TooltipProvider>
    <TooltipRoot :delay-duration="VAST_APP_STATES.tooltipShowDelay">
      <TooltipTrigger
        as-child
      >
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          :align="align"
          :side="side"
          class="bg-surface-overlay p-2 border border-border rounded-md text-text-primary"
        >
          {{ content }}
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
