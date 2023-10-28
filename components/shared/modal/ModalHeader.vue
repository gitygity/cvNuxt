<template>
  <div class="">
    <div class="flex flex-row justify-between items-baseline">
      <h3 class="font-bold text-base pb-1">{{ title }}</h3>
      <div class="flex ">
      <IconButton icon="fa-solid fa-close" class="mb-2" @click="handleCloseModal">
      </IconButton>
      </div>
    </div>
    <hr class="py-2" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import IconButton from "../IconButton.vue";
import type{ HeaderEmitsType, HeaderPropsType } from "./modalTypes";


const handleCloseModal = ()  =>{
  emit('close')
};

withDefaults(defineProps<HeaderPropsType>(), {
  title: "Title modal",
});

const emit=defineEmits<HeaderEmitsType>()
</script>
