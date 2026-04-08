<script lang="ts" setup>
import type {
  PanelId,
} from "../store";
import {
  Component,
  FolderOpen,
  Search,
} from "lucide-vue-next";
import {
  storeToRefs,
} from "pinia";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import {
  cn,
} from "@/shared/lib/utils";
import {
  usePanelMenuStore,
} from "../store";

const EDITOR_PANELS = [
  {
    id: "file-explorer",
    title: "File Explorer",
    Icon: FolderOpen,
  },
  {
    id: "search-component",
    title: "Search",
    Icon: Search,
  },
  {
    id: "components",
    title: "Components",
    Icon: Component,
  },
] as const satisfies ReadonlyArray<{
  id: PanelId;
  title: string;
  Icon: typeof FolderOpen;
}>;

const panelMenuStore = usePanelMenuStore();
const {
  activePanel,
} = storeToRefs(panelMenuStore);
</script>

<template>
  <aside class="w-fit h-full py-4 bg-background-100">
    <TooltipProvider>
      <section class="space-y-2">
        <Tooltip
          v-for="({ id, title, Icon }) in EDITOR_PANELS"
          :key="id"
        >
          <TooltipTrigger as-child>
            <button
              :class="
                cn(
                  'cursor-pointer px-3 py-2 block transition-colors hover:bg-primary-400 w-full',
                  activePanel === id && 'border-primary-200 border-l-3 bg-primary-400 text-primary-200',
                )
              "
              :aria-label="title"
              :aria-pressed="activePanel === id"
              type="button"
              @click="panelMenuStore.setActivePanel(id)"
            >
              <component :is="Icon" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">
            {{ title }}
          </TooltipContent>
        </Tooltip>
      </section>
    </TooltipProvider>
  </aside>
</template>
