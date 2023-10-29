<template>
  <Modal>
    <ModalHeader @close="close"  :title="title"  />
    <ModalBody>
      <slot name="body"></slot>
    </ModalBody>
    <ModalFooter>
      <slot name="footer">footer</slot>
    </ModalFooter>
  </Modal>
</template>

<script scoped lang="ts" setup>
import ModalHeader from "./ModalHeader.vue";
import ModalBody from "./ModalBody.vue";
import ModalFooter from "./ModalFooter.vue";
import Modal from "./Modal.vue";
import  type { ModalRootEmitsType, ModalRootPropsType } from "./modalTypes";


withDefaults(defineProps<ModalRootPropsType>(), {});
const emit=defineEmits<ModalRootEmitsType>()

const close = () => {
  emit('close')
};
</script>


