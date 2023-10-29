

<template >
    <div @click="handleClickIconButton" class="flex justify-end ">
    <a class=" justify-center w-12 h-12 hover:bg-gray-200 cursor-pointer  rounded-full flex   items-center  p-2 "> <FontAwesomeIcon :class="props.color"  size="lg"  :icon="icon"></FontAwesomeIcon></a>
    </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { IconButtonPropsType,IconButtonEmitsType } from './types/iconButtonTypes';



const props = withDefaults(defineProps<IconButtonPropsType>(),{
    color:"text-gray-700",
    icon:"fa-solid fa-pen-to-square"
});

const emit=defineEmits<IconButtonEmitsType>()

const handleClickIconButton=()=>{
    emit('click');
}
</script>

