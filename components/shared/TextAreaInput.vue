<template>
  <textarea
    :name="name"
    rows="4"
    cols="50"
    class="form-control"
    type="textarea"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
interface TextInputPropsType {
  placeholder: string;
  name: string;
}
const props = withDefaults(defineProps<TextInputPropsType>(), {
  label: "Default",
  name: "Default",
});
</script>

<style lang="css">
.form-control {
  @apply block w-full py-1 outline-none px-2 focus:border-gray-400 font-normal leading-5 text-gray-800 bg-gray-100 border-2 border-gray-200 rounded-md mb-2;
}
</style>
