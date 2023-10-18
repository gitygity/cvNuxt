<template>
  <section id="education" class=" education-section">
    <IconButton color="text-slate-100" @click="handleClick"></IconButton>
    <div class="content">
    <EducationSectionHeader></EducationSectionHeader>
     <EducationSectionBody></EducationSectionBody>
    </div>
  </section>
</template>
<script setup lang="ts">
import {IconButton} from "../shared"
const handleClick=()=>{
  console.log("clicked education")
}
</script>
<style scoped lang="css">
.education-section {
  background-image: linear-gradient(0deg, rgba(44, 44, 44, 0.644), rgba(4, 52, 9, 0.6)),
    url(../../assets/images/light-bl.svg), url(../../assets/images/light-br.svg),
    url(../../assets/images/overlay.png), url(../../assets/images/header2.jpg);
  background-position:
    top,
    left bottom,
    right bottom,
    left top,
    left bottom;
  background-repeat: repeat, no-repeat, no-repeat, repeat, no-repeat;
  background-size: auto, 20rem, 20rem, auto, cover;
  background-attachment: fixed, fixed, fixed, fixed, fixed;
  padding-bottom: 6rem;
}
.content {
  width: 90vw;
  margin: 1rem auto 0;
}

/* Extra big screen devices (1200px and above) */
@media only screen and (min-width: 1200px) {
  .content {
    width: 50vw;
  }
}
</style>
