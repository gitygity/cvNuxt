<template>
  <input
    :name="name"
    class="form-control"
    type="text"
    :placeholder="placeholder"
    :id="name"
    :value="value"
    @input="handleInput"
    @blur="handleInput"
    @keypress="handleInput"
  />
  <span class="block mb-3 font-semibold text-sm text-red-500" role="alert" v-if="errorMessage ">
    {{ errorMessage }}
  </span>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import * as yup from "yup";
import { TextInputEmitsType, TextInputPropsType } from "./types/textInputTypes";


const props = withDefaults(defineProps<TextInputPropsType>(), {
  label: "Default",
  name: "Default",
  validateRule:yup.string()
});

const emit=defineEmits<TextInputEmitsType>()
const { value, errorMessage,handleChange} = useField(props.name,props.validateRule);


const handleInput=(event:Event)=>{
  if (event.currentTarget instanceof HTMLInputElement) {
    const value = (event.currentTarget as HTMLInputElement)?.value;
  emit('input', value)
  handleChange(value);
  }

}
</script>

<style lang="css">
.form-control {
  @apply  block w-full py-1 outline-none px-2 focus:border-gray-400 font-normal leading-5 text-gray-800 bg-gray-100 border-2 border-gray-200 rounded-md mb-2;
}
</style>
