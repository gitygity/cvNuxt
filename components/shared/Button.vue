

<template >
    <button @click="handleClickButton" class="hover:bg-green-600 text-white font-medium bg-green-700 py-1 px-4 border outline-none my-1 mx-1 rounded-md">{{ label }}</button>
</template>

<script setup lang="ts">
import type { ButtonEmitsType, IconButtonPropsType } from './types/buttonTypes';


withDefaults(defineProps<IconButtonPropsType>(),{
   label:"Default"
});

const emit=defineEmits<ButtonEmitsType>()

const handleClickButton=()=>{
    emit('click');
}
</script>

