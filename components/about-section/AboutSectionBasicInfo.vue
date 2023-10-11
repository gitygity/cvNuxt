<template>
  <section>
    <h2>Basic Information</h2>
    <ul class="basic-info">
      <li><b>EMAIL</b>{{ info?.email }}</li>
      <li><b>PHONE</b>{{ info?.phone }}</li>
      <li><b>LOCATION</b>{{ info?.location }}</li>
      <li><b>LANGUAGE</b>{{ info?.language }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { data: info } = await useFetch("/api/info");
</script>

<style scoped lang="css">
.basic-info {
  line-height: 2rem;
  margin-left: 2rem;
  margin-top: 1rem;
}

.basic-info b {
  color: #378c3f;
  margin-right: 1rem;
  margin-left: 0.5rem;
}
</style>
