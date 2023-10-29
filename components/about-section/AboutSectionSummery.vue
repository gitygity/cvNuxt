<template>
  <section>
    <header>
      <h2>About</h2>
    </header>
    <p>
      Hello! I am<strong> {{ " " + user?.firstName + " " + user?.lastName }}</strong
      >.
    </p>
    <p>{{ user?.summery }} </p>
  </section>
</template>

<script setup lang="ts">
import {SummeryType} from "./AboutSectionTypes"

  const user=withDefaults(defineProps<SummeryType>(),{lastName:"",firstName:"",summery:""})
</script>
