<script setup lang="ts">
import Header from "@features/header/components/header.vue";
import {
  Toaster,
} from "@shared/components/ui/sonner";
import PanelMenu from "./features/panel-menu/components/panel-menu.vue";
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
    </section>
  </main>
</template>
