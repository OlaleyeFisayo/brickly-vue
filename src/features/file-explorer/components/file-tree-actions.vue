<script lang="ts" setup>
import {
  FilePlus2,
  FolderPlus,
  RefreshCcw,
} from "lucide-vue-next";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

const ACTIONS = [
  {
    title: "Create new file",
    Icon: FilePlus2,
  },
  {
    title: "Create new folder",
    Icon: FolderPlus,
  },
  {
    title: "Refresh File Explorer",
    Icon: RefreshCcw,
  },
];
</script>

<template>
  <section class="w-fit flex gap-3">
    <TooltipProvider>
      <Tooltip
        v-for="action in ACTIONS"
        :key="action.title"
      >
        <TooltipTrigger as-child>
          <button class="cursor-pointer hover:bg-primary-400 hover:text-primary-200">
            <component
              :is="action.Icon"
              class="w-4 h-4"
            />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          {{ action.title }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </section>
</template>
