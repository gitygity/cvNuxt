<template>
  <textarea
    :name="name"
    rows="4"
    cols="50"
    class="form-control"
    type="textarea"
    :placeholder="placeholder"
    :id="name"
    :value="String(value)"
    @input="handleInput"
    @blur="handleInput"
    @keypress="handleInput"
  />
  <span class="block mb-3 font-semibold text-sm text-red-500" role="alert" v-if="errorMessage ">
    {{ errorMessage }}
  </span>
</template>

<script setup lang="ts">
import type{ TextAreaEmitsType, TextAreaPropsType } from './types/textAreaTypes';
import * as yup from "yup";

const props = withDefaults(defineProps<TextAreaPropsType>(), {
  label: "Default",
  name: "Default",
  validateRule:yup.string()
});
const { value, errorMessage,handleChange} = useField(props.name,props.validateRule);
const emit=defineEmits<TextAreaEmitsType>()


const handleInput=(event:Event)=>{
  if (event.currentTarget instanceof HTMLTextAreaElement) {
    const value = (event.currentTarget as HTMLTextAreaElement)?.value;
    emit('input', value)
  handleChange(value);
  }
}
</script>

<style lang="css">
.form-control {
  @apply block w-full py-1 outline-none px-2 focus:border-gray-400 font-normal leading-5 text-gray-800 bg-gray-100 border-2 border-gray-200 rounded-md mb-2;
}
</style>
