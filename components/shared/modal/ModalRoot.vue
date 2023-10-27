<template>
  <section :class="{ 'modal-root': modal.component }">
    <Transition name="modal"> 
    <component
     v-if="modal" 
    :is="modal.component" 
    :close="modal.close"
    :dismiss="modal.dismiss"
    :props="modal.props"
    :class="{'block':modal.component}"
    />
    </Transition>
  </section>
</template>

<script lang="ts" setup>
import { ModalType, OpenModalType } from "./modalTypes";
import Modal from "./Modal.vue"

let modal:ModalType = {};
const { $listen } = useNuxtApp()

$listen("modal:open", ({ component, props, resolve, reject }:OpenModalType) => {
  console.log("cccccccccc",component, props, resolve, reject)
  modal = {
    component,
    props,
    close: (value) => {
      modal = {};
      resolve(value);
    },
    dismiss: (reason) => {
      modal = {};
      reject(reason);
    },
  };
});

</script>

<style lang="css" scoped>
.modal-root {
  position: fixed;
  top: 0;
  z-index: 100vw;
  width: 100vw;
  height: 100vh;
  background-color: rgb(1, 1, 1, 0.2);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease-out;
}

.modal-enter,
.modal-leave-to {
  transform: translateY(25px);
  opacity: 0;
}


</style>
