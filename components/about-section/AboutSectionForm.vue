<template>
  <ModalRoot @close="close" icon="fa-solid fa-edit" title="About Section">
      <template #body>
        <form @submit.prevent="onSubmit">
        <fieldset class="p-2">
          <legend class="font-semibold">Summery Info</legend>
          <TextInput :validateRule="schema.fields.firstName" name="firstName" placeholder="First Name" />
          <TextInput :validateRule="schema.fields.lastName" name="lastName" placeholder="Last Name" />
          <TextArea :validateRule="schema.fields.summery" name="summery" placeholder="Summery" />
        </fieldset>
        <fieldset class="p-2">
          <legend class="font-semibold">Basic Info</legend>
          <TextInput :validateRule="schema.fields.email" name="email" placeholder="Email" />
          <TextInput :validateRule="schema.fields.phone" name="phone" placeholder="Phone" />
          <TextInput :validateRule="schema.fields.location" name="location" placeholder="Location" />
          <TextInput :validateRule="schema.fields.language" name="language" placeholder="Language" />
        </fieldset>
      </form>
      </template>
      <template #footer>
        <Button label="Cancel" @click="close"></Button>
        <Button
          type="submit"
          :label="isEdit ? 'Edit' : 'Add'"
          @click="onSubmit"
        />
      </template>
   
  </ModalRoot>
</template>

<script lang="ts" setup>
import { ModalRoot, Button, TextInput, TextArea } from "../shared";
import { Form } from 'vee-validate';
import {AboutSectionFormPropsTypes,AboutFormInputType,AboutSectionEmitsTypes} from "./AboutSectionTypes"
import * as yup from "yup";

//______________________________initialize
const aboutData=withDefaults(defineProps<AboutSectionFormPropsTypes>(), { isEdit: false });
const emit=defineEmits<AboutSectionEmitsTypes>()
  const formInput:AboutFormInputType = reactive(aboutData);

//______________________________validation init
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  summery: yup.string().required().max(400, "must be less than 400 character"),
  email: yup.string().required().email("must be a valid email"),
  phone: yup.string().required().matches(phoneRegExp, "Phone number is not valid"),
  location: yup.string().required(),
  language: yup.string().required(),
});

//___________________________________functions
const { handleSubmit } = useForm<AboutFormInputType>({
  validationSchema: schema,
  initialValues: formInput
});

const close = () => {
  emit('close')
};
const onSubmit = handleSubmit(values => {
  emit('apply',values)
  close()
});

</script>

<style lang=""></style>
