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
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import Modal from "./Modal";
// import {ModalRootPropsType} from "./modalTypes"

export interface ModalRootPropsType {
  close: Function;
  dismiss: Function;
  icon: string;
  title: string;
}

withDefaults(defineProps<ModalRootPropsType>(), {});

const close = (e) => {
  console.log("loggggg", e);
};
</script>

<style lang=""></style>
