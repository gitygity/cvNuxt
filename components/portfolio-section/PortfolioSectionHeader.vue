<template>
  <header class="center-title">
    <h2 class="title">Portfolio</h2>
    <p class="section-subtitle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium
      veniam atque est quod.
    </p>
  </header>
</template>

<style scoped lang="css">
.center-title {
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

.section-subtitle {
  color: #5e7d5e;
  font-size: large;
  font-weight: 400;
  text-align: center;
}
.title::after {
  content: "";
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
