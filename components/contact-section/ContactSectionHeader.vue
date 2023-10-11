<template >
      <header class="contact-header">
        <h2 class="title">Contact Me</h2>
      </header>
</template>

<style scoped lang="css">
.contact-header {
  text-align: center;
}

.title {
  font-weight: 700;
  color: rgb(96, 97, 97);
  font-size: 1.5rem;
  margin: 0 0 2rem;
  position: relative;
  display: inline-block;
  z-index: 1;
  text-align: center;
  margin-top: 2rem;
}
.title::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(55, 140, 63, 0.4);
  z-index: -1;
  opacity: 0.5;
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {

  .title {
    font-size: 3rem;
  }
}
</style>
