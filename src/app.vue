<script setup lang="ts">
import {
  Toaster,
} from "@shared/components/ui/sonner";
import FileTree from "@/features/file-explorer/components/file-tree.vue";
import Header from "@/features/header/components/header.vue";
import PanelMenu from "@/features/panel-menu/components/panel-menu.vue";
</script>

<template>
  <Toaster
    rich-colors
    theme="dark"
  />
  <main class="w-full h-dvh text-primary-300 flex flex-col">
    <Header />
    <section class="flex flex-1">
      <PanelMenu />
      <FileTree />
    </section>
  </main>
</template>
