<template>
  <div class="">
    <div class="flex flex-row justify-between items-baseline">
      <h3 class="font-bold text-base pb-1">{{ title }}</h3>
      <IconButton :icon="icon" class="mb-2" @click="handleCloseModal">
      </IconButton>
    </div>
    <hr class="py-2" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import IconButton from "../IconButton.vue";
// import { HeaderPropsType } from "./modalTypes";
export interface HeaderPropsType {
  title: string;
  icon: string;
}
const handleCloseModal = () => {};

withDefaults(defineProps<HeaderPropsType>(), {
  title: "Title modal",
  icon: "fa-solid fa-edit",
});
</script>
