<template>
  <section id="experience" class="content">
    <div class="card">
      <IconButton @click="handleClick"></IconButton>
      <ExperienceSectionHeader></ExperienceSectionHeader>
      <ExperienceSectionBody></ExperienceSectionBody>
    </div>
  </section>
</template>
<script setup lang="ts">
import {IconButton} from "../shared"
const handleClick=()=>{
  console.log("clicked exper")
}
</script>
<style scoped lang="css">
/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .card {
    padding: 2rem;
  }
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
  .card section {
    padding: 1rem 0;
  }
}

/* Extra big screen devices (1200px and above) */
@media only screen and (min-width: 1200px) {
  .content {
    width: 50vw;
  }
}

.card section {
  padding: 1rem 0;
}
.content {
  width: 90vw;
  margin: 1rem auto 0;
}

.card {
  padding: 2rem;
  margin: 3rem 0rem;
  border-radius: 0.2rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}
</style>
