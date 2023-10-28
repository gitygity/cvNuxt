<template>
  <ModalRoot icon="fa-solid fa-edit" title="About Section">
    <form @submit.prevent="validateForm">
      <template #body>
        <fieldset class="p-2">
          <legend class="font-semibold">Summery Info</legend>
          <TextInput name="firstName" placeholder="First Name" />
          <TextInput name="lastName" placeholder="Last Name" />
          <TextAreaInput name="summery" placeholder="Summery" />
        </fieldset>
        <fieldset class="p-2">
          <legend class="font-semibold">Basic Info</legend>
          <TextInput name="email" placeholder="Email" />
          <TextInput name="phone" placeholder="Phone" />
          <TextInput name="location" placeholder="Location" />
          <TextInput name="language" placeholder="Language" />
        </fieldset>
      </template>
      <template #footer>
        <Button label="Cancel" @click="close('modal closed')"></Button>
        <Button
          :label="isEdit ? 'Edit' : 'Add'"
          @click="dismiss('modal dismissed')"
        ></Button>
      </template>
    </form>
  </ModalRoot>
</template>

<script lang="ts" setup>
import { ModalRoot, Button, TextInput, TextAreaInput } from "../shared";
import { useField, Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const { errorMessage, meta, value } = useField("fieldName");

const formInput = reactive({
  firstName: "",
  lastName: "",
  summery: "",
  email: "",
  phone: "",
  location: "",
  language: "",
});

const validateForm = () => {
  try {
    schema.validateSync(formInput);
  } catch (error) {
    console.log(error);
  }
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  summery: yup.string().required().max(400, "must be less than 400 character"),
  email: yup.string().email("must be a valid email"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  location: yup.string().required(),
  language: yup.string().required(),
});

export interface AboutSectionFormTypes {
  isEdit: boolean;
}

withDefaults(defineProps<AboutSectionFormTypes>(), { isEdit: false });

const close = (e) => {
  console.log("loggggg", e);
};
</script>

<style lang=""></style>
