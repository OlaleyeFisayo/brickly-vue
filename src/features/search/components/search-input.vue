<script lang="ts" setup>
import {
  Search,
} from "lucide-vue-next";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/components/ui/input-group";

const model = defineModel<string>({
  default: "",
});
</script>

<template>
  <InputGroup class="h-fit bg-background-100 rounded-none border-0 outline-0 ring-0!">
    <InputGroupInput
      v-model="model"
      placeholder="Search components.."
      class="h-fit p-2.5"
    />
    <InputGroupAddon>
      <Search />
    </InputGroupAddon>
  </InputGroup>
</template>
