<template>
  <section id="contact" class="contact-me">
    <div class="card-contact">
      <Form @submit="submit" :validation-schema="schema">
    <Field name="email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" />
    <ErrorMessage name="password" />
    <button>Submit</button>
  </Form>
      <ContactSectionHeader></ContactSectionHeader>
      <div class="form-section">
        <ContactSectionForm></ContactSectionForm>
        <ContactSectionAddress></ContactSectionAddress>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().email(),
  name: yup.string().required(),
  password: yup.string().required().min(8),
});
</script>
<style scoped lang="css">
.contact-me {
  position: static;
  min-height: 600px;
}

.card-contact {
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  margin: 1rem auto;
  background-color: white;
  width: 90%;
}
.form-section {
  display: flex;
  flex-direction: column-reverse;
}
/* Big screen devices (889px and above) */
@media only screen and (min-width: 889px) {
  .card-contact {
    width: 70%;
  }
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
  .contact-me {
    background-image: url(../../assets/images/map.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 90vh;
    min-height: 600px;
  }

  .card-contact {
    margin: auto;
    width: 90%;
    margin-top: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
