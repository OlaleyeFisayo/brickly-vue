<script lang="ts" setup>
import AppSeparator from "@shared/components/app-separator.vue";
import AppTooltip from "@shared/components/app-tooltip.vue";
import {
  useActivitybarStore,
} from "../store";
import {
  ActivityBarList,
} from "../variables";

const activityBarStore = useActivitybarStore();
</script>

<template>
  <section
    class="w-13.75! rounded-none h-full space-y-4 bg-surface-raised py-4 border-r border-border"
  >
    <img
      src="../../../shared/assets/logo.png"
      class="size-8 mx-auto"
    >
    <AppSeparator />
    <template
      v-for="{ title, Icon } in ActivityBarList"
      :key="title"
    >
      <AppTooltip
        :content="title"
        align="center"
      >
        <button
          :class="`cursor-pointer w-full flex items-center justify-center ${activityBarStore.activityInView === title ? 'text-text-primary' : 'text-text-muted'} hover:text-text-primary`"
          type="button"
          @click="activityBarStore.changeActivityInView(title)"
        >
          <component
            :is="Icon"
            class="size-8"
          />
        </button>
      </AppTooltip>
    </template>
  </section>
</template>
