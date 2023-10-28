<template>
  <Modal>
    <ModalHeader :title="title" :icon="icon" />
    <ModalBody>
      <slot name="body"></slot>
    </ModalBody>
    <ModalFooter>
      <slot name="footer">footer</slot>
    </ModalFooter>
  </Modal>
</template>

<script lang="ts" setup>
import ModalHeader from "./ModalHeader.vue";
import ModalBody from "./ModalBody.vue";
import ModalFooter from "./ModalFooter.vue";
import Modal from "./Modal.vue";
// import {ModalRootPropsType} from "./modalTypes"

export interface ModalRootPropsType {
  close: Function;
  dismiss: Function;
  icon: string;
  title: string;
}

withDefaults(defineProps<ModalRootPropsType>(), {});

const close = (e:Event) => {
  console.log("loggggg", e);
};
</script>

<style lang=""></style>
