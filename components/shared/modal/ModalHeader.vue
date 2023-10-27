<template>
  <div class="">
  <div class="flex flex-row justify-between items-baseline">
 <h3 class="font-bold text-base pb-1">{{title}}</h3>
 <IconButton class="mb-2" @click="handleCloseModal"><font-awesome-icon class="px-2" icon="fa-solid fa-bars" /></IconButton>
 
  </div>
  <hr class="py-2">
    <slot />
  </div>
</template>

<script setup lang="ts">
import IconButton from '../IconButton.vue';



const handleCloseModal=()=>{}
interface HeaderPropsType {
  title: string;
  icon:string
}

withDefaults(defineProps<HeaderPropsType>(), {title:"title modal",icon:"bars"});
</script>

<style scoped></style>
