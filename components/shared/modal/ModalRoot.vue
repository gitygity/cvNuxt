<template>
  <section :class="{ 'modal-root': modal.component }">
    <Transition name="modal"> 
    <component
     v-if="modal" 
    :is="modal.component" 
    :close="modal.close"
    :dismiss="modal.dismiss"
    :props="modal.props"
    :class="{'d-block':modal.component}"
    />
    </Transition>
  </section>
</template>

<script setup>
import ModalService from "../services/modal.service";
import Modal from "./Modal.vue";

let modal = {};

ModalService.$on("open", ({ component, props, resolve, reject }) => {
  this.modal = {
    component,
    props,
    close: (value) => {
      this.modal = {};
      resolve(value);
    },
    dismiss: (reason) => {
      this.modal = {};
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
