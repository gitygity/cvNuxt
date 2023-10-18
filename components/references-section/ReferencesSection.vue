<template>
  <section id="references" class="content">
    <IconButton @click="handleClick"></IconButton>
  <ReferencesSectionHeader></ReferencesSectionHeader>
  <ReferencesSectionBody></ReferencesSectionBody>
  </section>
</template>
<script setup lang="ts">
import {IconButton} from "../shared"
const handleClick=()=>{
  console.log("clicked refere")
}
</script>
<style scoped lang="css">
/* Extra big screen devices (1200px and above) */
@media only screen and (min-width: 1200px) {
  .content {
    width: 50vw;
  }
}
.content {
  width: 90vw;
  margin: 1rem auto 0;
}

</style>
