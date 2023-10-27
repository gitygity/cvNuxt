<template >
     <input
        class="form-control "
        type="text"
        placeholder="Subject"
       
      />
</template>
<script setup  lang="ts">
interface TextInputPropsType{
  placeholder:string
}
 defaultV defineProps<TextInputPropsType>()

</script>

<style lang="css">
.form-control{
    @apply block w-full py-1 px-2 font-normal leading-5 text-gray-800 bg-gray-100 border-2 border-gray-200 mb-2;
}
</style>
