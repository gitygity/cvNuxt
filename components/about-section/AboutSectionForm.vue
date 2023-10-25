<template>
    <Modal>
      <ModalHeader></ModalHeader>
      <ModalBody>
      <TextInput  ></TextInput>
      </ModalBody>
      <ModalFooter>
        <Button label="Cancel" @click="close('modal closed')"></Button>
        <Button label="Ok" @click="dismiss('modal dismissed')"></Button>
      </ModalFooter>
    </Modal>
</template>

<script setup>
import { Modal, ModalBody, ModalHeader, ModalFooter,Button,TextInput } from "../shared";
import TextInput from "../shared/TextInput.vue";


const close=(e)=>{
   console.log("loggggg",e)
}
</script>

<style lang=""></style>
