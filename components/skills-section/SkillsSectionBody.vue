<template>
  <div class="card">
  <!-- <div class="flex justify-end"> -->
  <IconButton @click="handleOpenEditModal"></IconButton>
    <!-- <IconButton icon="fa-solid fa-add" @click="handleOpenAddModal"></IconButton></div> -->
    
    <section>
      
      <div class="skills-container">
     {{props?.skills && props?.skills[0]?.percent }}
        <div v-for="(skill, index) in props?.skills" :key="index" class="progress-container">
          <span class="progress-title"
            ><abbr>{{ skill.skillName }}</abbr></span
          >
          <span class="progress-percent">{{ skill?.percent }}%</span>
          <div class="progress-gutter">
            <div :style="{ width: skill?.percent + '%' }" class="progress-bar"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {IconButton} from "../shared"
import type{ SkillList } from "./skillsSectionTypes";



const handleOpenEditModal=()=>{console.log("clicked skills")}
const handleOpenAddModal=()=>{console.log("clicked skills")}


const props=withDefaults(defineProps<{skills:SkillList}>(),{skills:undefined})
</script>

<style scoped lang="css">
.progress-gutter {
  position: relative;
  height: 0.3rem;
  background-color: rgba(55, 140, 63, 0.4);
}

.progress-bar {
  z-index: 5;
  height: 0.3rem;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #378c3f;
  width: 20px;
}

.progress-title {
  color: #378c3f;
  font-weight: bold;
  padding: 1rem 0rem;
  display: inline-block;
}

.progress-percent {
  color: #378c3f;
  font-weight: bold;
  padding: 1rem 0rem;
  /* display: inline-block; */
  float: right;
}
.skills-container::after {
  width: 100%;
  content: "";
  display: table;
  clear: both;
}
.progress-container {
  width: 100%;
  padding: 1rem 0.8rem;
  float: left;
}
/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .progress-container {
    width: 50%;
  }
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

.card section {
  padding: 1rem 0;
}

.card {
  padding: 2rem;
  margin: 3rem 0rem;
  border-radius: 0.2rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}
</style>
