<template>
  <div>
    <h2>404 Not Found</h2>
    <p>The page you're looking for does not exist.</p>
    <p>{{ error.url }}}</p>
    <p>{{ error.statusCode }}}</p>
    <p>{{ error.message }}}</p>
    <p>{{ error.statusMessage }}}</p>
    <p>{{ error.description }}}</p>
    <p>{{ error.data }}}</p>
    <button @click="handleError">Go Home</button>
  </div>
</template>

<script setup>
const handleError = () => clearError({ redirect: "/" });
definePageMeta({
  layout: "error-layout",
});

defineProps(["error"]);
</script>
