<template>
      <header class="center-title">
        <h2 class="title-education">Education</h2>
        <p class="education-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium veniam
          atque est quod.
        </p>
      </header>
</template>

<style scoped lang="css">
.education-subtitle {
  color: #87d587;
  font-size: large;
  font-weight: 400;
  text-align: center;
  padding: 0 2rem;
}
.title-education {
  font-weight: 700;
  color: rgb(228, 236, 228);
  font-size: 45px;
  margin: 3rem 0 2rem;
  position: relative;
  display: inline-block;
  z-index: 1;
}

.title-education::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(246, 255, 247, 0.48);
  z-index: -1;
  opacity: 0.5;
}

.center-title {
  text-align: center;
}

</style>
