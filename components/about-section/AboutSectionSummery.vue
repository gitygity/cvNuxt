<template>
  <section>
    <header>
      <h2>About</h2>
    </header>
    <p>
      Hello! I am<strong> {{ " " + user?.firstName + " " + user?.lastName }}</strong
      >.
    </p>
    <p>
      A Frontend developer with 4+ years of experience in developing interactive websites
      & web pages incorporating responsive web design. expertise in web development (
      React, Svelte, Typescript, JavaScript, etc) & testing (Cypress, Jest, Playwright).
    </p>
  </section>
</template>

<script setup lang="ts">
const { data: user } = await useFetch("/api/user");
</script>
