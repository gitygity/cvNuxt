<template>
  <input
    :name="name"
    class="form-control"
    type="text"
    :placeholder="placeholder"
    :id="name"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('validate')"
    @keypress="$emit('validate')"
  />
  <span role="alert" v-if="errorMessage && meta.touched">
    {{ errorMessage }}
  </span>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { TextInputPropsType } from "./types/textInputTypes";

const props = withDefaults(defineProps<TextInputPropsType>(), {
  label: "Default",
  name: "Default",
});
const { value, errorMessage,errors, meta, setErrors, setValue } = useField(props.name,value => !!value);
</script>

<style lang="css">
.form-control {
  @apply block w-full py-1 outline-none px-2 focus:border-gray-400 font-normal leading-5 text-gray-800 bg-gray-100 border-2 border-gray-200 rounded-md mb-2;
}
</style>
