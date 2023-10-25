<template>
  <div class="custom">
    <!-- <TheHeader></TheHeader> -->
    <slot />
    <!-- <TheFooter></TheFooter> -->
  </div>
</template>

<script setup lang="ts">
import  {TheHeader}  from '~/components/header-section'
import  {TheFooter}  from '~/components/footer-section'
</script>

<style scoped>
.custom {
  /* background-color: red; */
}
</style>
