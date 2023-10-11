<template>
  <div class="col-contact-container">
    <form @submit.prevent="handleSubmitForm">
      <input
        class="form-control"
        type="text"
        placeholder="Name"
        @input="handleChangeName"
        :value="contactForm.name"
      />
      <input
        class="form-control"
        type="text"
        placeholder="Subject"
        v-model="contactForm.subject"
      />
      <input
        class="form-control"
        type="text"
        placeholder="Email"
        v-model="contactForm.email"
      />
      <textarea
        class="form-control"
        type="text"
        rows="4"
        placeholder="message"
        v-model="contactForm.message"
      />
      <input value="Send" type="submit" />
    </form>
  </div>
</template>

<script setup lang="ts">
interface ContactForm {
  name: string;
  subject: string;
  email: string;
  message: string;
}
const contactForm: Ref<ContactForm> = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmitForm = () => {
  console.log("form", contactForm?.value);
};

const handleChangeName = (event: Event) => {};
</script>

<style scoped lang="css">
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #434a54;
  background-color: #f8f9fa;
  background-clip: padding-box;
  border: 2px solid #dee2e6;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #434a54;
  background-color: #fff;
  border-color: #a6d9ac;
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(159, 238, 176, 0.25);
}

input[type="submit"] {
  padding: 0.8rem 1rem;
  width: 10rem;
  border-radius: 0.3rem;
  font-weight: 400;
  outline: none;
  color: white;
  background-color: #378c3f;
  border: none;
  cursor: pointer;
  margin: 1rem 0.1rem;
}
.col-contact-container {
  flex: 100%;
  margin: 1rem 0;
  /* padding: 1rem; */
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
  .col-contact-container {
    flex: 50%;
    padding: 1rem;
    margin: 0;
  }
}
</style>
