<template>
  <section class="ac-container">
    <div v-for="(experience, index) in experiences" :key="index" class="ac-item">
      <div class="year-badge-container">
        <span class="year-badge">{{
          experience?.startDate + " - " + experience?.endDate
        }}</span>
      </div>
      <div class="ac-item-detail">
        <input :id="'ac-' + index + 1" type="checkbox" :checked="index === 0" />
        <label class="ac-icon" :for="'ac-' + index + 1"></label>
        <article class="ac-content">
          <h1>{{ experience?.company }}</h1>
          <span>{{ experience?.stack }}</span>
          <p>{{ experience?.description }}</p>
          <a href="#">more</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: experiences } = useFetch("/api/experience/experience");
</script>

<style scoped lang="css">
.year-badge-container {
  flex: 100%;
  text-align: right;
  position: absolute;
  top: -1.5rem;
  right: 0;
  z-index: 99;
}

.year-badge {
  background-color: #3f5341;
  border-radius: 0.3rem;
  padding: 0.1rem 0.5rem;
  color: white;
  font-weight: bold;
  font-size: medium;
  height: max-content;
}

.ac-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  background-color: #729475;
  color: white;
  font-weight: bolder;
  font-size: 1rem;
}

.ac-container input:not(:checked) + .ac-icon::after {
  font-family: "Font Awesome 5 Free";
  content: "\2b";
}

.ac-container input:checked + .ac-icon::after {
  font-family: "Font Awesome 5 Free";
  content: "\2212";
}

.ac-container .ac-item-detail::before {
  border-left: 0.15rem dashed #898888;
  content: "";
  height: 100%;
  left: 1rem;
  opacity: 0.6;
  position: absolute;
  z-index: -1;
  top: 0;
}

.ac-container input {
  display: none;
}

.ac-container article {
  background: rgba(255, 255, 255, 0.5);
  margin-top: -1px;
  overflow: hidden;
  height: 5.5rem;
  position: relative;
  padding: 1rem;
  border: #c0bfbf solid 1px;
  z-index: 10;
  width: 90%;
  -webkit-transition: height 0.3s ease-in-out;
  -moz-transition: height 0.3s ease-in-out;
  -o-transition: height 0.3s ease-in-out;
  -ms-transition: height 0.3s ease-in-out;
  transition: height 0.3s ease-in-out;
}

.ac-container article p {
  color: #3e3e3e;
  margin-top: 2rem;
  line-height: 1.2rem;
}

.ac-container article h1 {
  margin: 0.5rem 0 0.3rem 0;
}
.ac-item-detail {
  justify-content: flex-end;
  display: flex;
  position: relative;
  justify-content: space-between;
  flex: 100%;
}
.ac-content {
  border-radius: 0.3rem;
  margin: 3rem 0 3rem 0.5rem;
}

.ac-item {
  position: relative;
}

.ac-container {
  max-width: 100%;
  margin: 3rem auto 1rem auto;
  position: relative;
}
.ac-container input:checked ~ article.ac-content {
  height: 20rem;
}
/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .ac-container input:checked ~ article.ac-content {
    height: 16rem;
  }
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {
  .ac-item-detail {
    flex: 80%;
  }

  .year-badge-container {
    flex: 20%;
    position: static;
    text-align: left;
  }

  .ac-container input:checked ~ article.ac-content {
    height: 14rem;
  }

  .ac-item {
    display: flex;
    position: static;
  }

  .ac-container {
    position: static;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 3rem auto 1rem auto;
    position: relative;
  }
}
</style>
