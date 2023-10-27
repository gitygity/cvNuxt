<template>
  <div
    class="backdrop-blur z-[999] flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-gray-500/[.06]"
  >
    <div class="bg-white rounded-md h-max w-1/2 p-4 shadow-md"><slot></slot></div>
  </div>
</template>

<script setup></script>
