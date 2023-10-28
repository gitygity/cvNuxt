<script setup lang="ts">
import AboutSectionBasicInfo from "./AboutSectionBasicInfo.vue";
import AboutSectionSummery from "./AboutSectionSummery.vue";
import { IconButton } from "../shared";
import AboutSectionForm from "./AboutSectionForm.vue";
import {AboutFormInputType} from "./AboutSectionTypes"
import { Teleport } from "vue";

//_____________________________________refs
const isShowAboutSectionModal = ref(true);
const isEdit = ref(false);

const toggleShowDialog = () => {
  isShowAboutSectionModal.value = !isShowAboutSectionModal.value;
};
const handleApplyAboutSectionForm=(data:AboutFormInputType)=>{}
</script>
<template>
  <section id="about" class="content">
    <div class="card">
      <IconButton @click="toggleShowDialog"></IconButton>
      <AboutSectionSummery></AboutSectionSummery>
      <AboutSectionBasicInfo></AboutSectionBasicInfo>
      <Teleport to="body">
        <Transition mode="in-out">
        <AboutSectionForm @apply="handleApplyAboutSectionForm" @close="toggleShowDialog" :isEdit="isEdit" v-if="isShowAboutSectionModal" />
        </Transition>
      </Teleport>
    </div>
  </section>
</template>
<style scoped lang="postcss">
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-10vw);
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
.card section {
  padding: 1rem 0;
}

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
</style>
