<script setup lang="ts">
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
    <TooltipRoot :delay-duration="1000">
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
