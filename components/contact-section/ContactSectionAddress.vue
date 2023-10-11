<template>
  <address class="col-contact-container">
    <h4>Address</h4>
    <div class="info-contact">{{ info?.location }}</div>
    <h4>Phone</h4>
    <div class="info-contact">{{ info?.phone }}</div>
    <h4>Email</h4>
    <div class="info-contact">{{ info?.email }}</div>
  </address>
</template>

<script setup lang="ts">
const { data: info } = useFetch("/api/info");
</script>

<style scoped lang="css">
.info-contact {
  padding-bottom: 1rem;
  margin: 0.3rem 0;
}

.col-contact-container {
  flex: 100%;
  margin: 1rem 0;
  /* padding: 1rem; */
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
  .col-contact-container {
    flex: 50%;
    padding: 1rem;
    margin: 0;
  }
}
</style>
