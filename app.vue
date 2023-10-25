<script setup lang="ts">


const layout = "private";

definePageMeta({
  title: "My home page",
});
</script>

<template>
  <NuxtLayout :name="layout"><NuxtPage /> </NuxtLayout>
</template>
