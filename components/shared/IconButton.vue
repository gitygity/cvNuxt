

<template >
    <div @click="handleClickIconButton" class="flex justify-end ">
    <a class=" justify-center w-12 h-12 hover:bg-gray-200 cursor-pointer  rounded-full flex   items-center  p-2 " href="#"> <FontAwesomeIcon :class="props.color"  size="lg"  icon="fa-solid fa-pen-to-square"></FontAwesomeIcon></a>
    </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
console.log("🚀 ~ file: IconButton.vue:11 ~ FontAwesomeIcon:", FontAwesomeIcon)


export interface IconButtonPropsType{
    color:string,
}


const props = withDefaults(defineProps<IconButtonPropsType>(),{
    color:"text-gray-700"
});
const emit=defineEmits({
    click:null
})

const handleClickIconButton=()=>{
    emit('click');
}
</script>

<style lang="css">
    
</style>