

<template >
    <button @click="handleClickButton" class="hover:bg-green-600 text-white font-medium bg-green-700 py-1 px-4 border outline-none my-1 mx-1 rounded-md">{{ label }}</button>
</template>

<script setup lang="ts">

export interface IconButtonPropsType{
    label:string
}


const props = withDefaults(defineProps<IconButtonPropsType>(),{
   label:"Default"
});

const emit=defineEmits({
    click:null
})

const handleClickButton=()=>{
    emit('click');
}
</script>

