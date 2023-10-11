<template>
    <div class="switch-portfolio">
      <ul>
        <li>
          <a class="switch-link swtich-active" href="#">  <font-awesome-icon class="social-icon" icon="fa-solid fa-laptop" /></a>
        </li>
        <li>
          <a class="switch-link" href="#"> <font-awesome-icon class="social-icon" icon="fa-solid fa-image" /></a>
        </li>
        <li>
          <a class="switch-link" href="#"><font-awesome-icon class="social-icon" icon="fa-solid fa-camera" /></a>
        </li>
      </ul>
    </div>
    <div class="portfolio-container">
      <div class="portfolio-column">
        <article v-for="(portfolio, index) in firstHalf" :key="index" class="portfolio-item">
          <img :src="portfolio?.cover" />
          <div class="overly-portfolio">
            <div class="portfolio-text">
              <div class="portfolio-info">
                <h1><a class="portfolio-link" href="#">{{portfolio?.title}}</a></h1>
                <span class="portfolio-subtitle">{{portfolio?.subTitle}}</span>
                <div class="tag-container">
                  <span v-for="(tech, index) in portfolio?.technologies " :key="index" class="portfolio-tag">{{tech}}</span>
                </div>
              </div>
              <a class="portfolio-more" href="#">
                <span>More</span>
                 <font-awesome-icon class="icon-more-portfolio" icon="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </article>
      </div>

      <div class="portfolio-column">
        <article v-for="(portfolio, index) in secondHalf" :key="index" class="portfolio-item">
          <img :src="portfolio?.cover" />
          <div class="overly-portfolio">
            <div class="portfolio-text">
              <div class="portfolio-info">
                <h1><a class="portfolio-link" href="#">{{portfolio?.title}}</a></h1>
                <span class="portfolio-subtitle">{{portfolio?.subTitle}}</span>
                <div class="tag-container">
                  <span v-for="(tech, index) in portfolio?.technologies " :key="index" class="portfolio-tag">{{tech}}</span>
                </div>
              </div>
              <a class="portfolio-more" href="#">
                <span>More</span>
                 <font-awesome-icon class="icon-more-portfolio" icon="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
</template>
<script setup lang="ts">
const {data:portfolios}=useFetch("/api/portfolio")

const halfLength = Math.ceil((portfolios.value?.length||0) / 2);
const firstHalf = ref(portfolios.value?.slice(0, halfLength));
const secondHalf = ref(portfolios.value?.slice(halfLength));
</script>

<style scoped lang="css">
.tag-container {
  font-size: small;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.switch-link {
  transition: all 0.2s ease;
  text-align: center;
  font-size: large;
}

.switch-link:hover {
  background-color: #378c4082;
  color: white;
  transform: scale(1.2);
}

.switch-portfolio .swtich-active {
  background-color: #378c3f;
  color: white;
  transform: scale(1.2);
}

.switch-portfolio a {
  padding: 1rem;
  background-color: gainsboro;
  color: gray;
  border-radius: 50%;
  float: left;
  margin: 0.4rem;
}

.switch-portfolio li {
  display: inline-block;
  margin-top: 1rem;
}

.switch-portfolio ul {
  text-align: center;
  margin-bottom: 1rem;
}

.switch-portfolio::after {
  display: table;
  content: '';
  clear: both;
}

.portfolio-text {
  color: white;
}

.portfolio-more {
  color: white;
  text-decoration: none;
}

.portfolio-link {
  color: white;
  text-decoration: none;
  background-size: 0% 2px;
  background-position: 0 bottom;
  font-weight: 700;
  font-size: 22px;
}

.overly-portfolio:hover .portfolio-link {
  color: #ffffff;
  background-image: linear-gradient(#ffffff, #ffffff);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: 0 bottom;
  background-color: transparent;
  padding: 0;
  transition: ease all 0.35s 0.2s;
}

.portfolio-subtitle {
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 0;
  display: inline-block;
}

.overly-portfolio:hover .portfolio-info {
  left: 1.5rem;
  opacity: 1;
}

.portfolio-info {
  position: absolute;
  left: 0rem;
  opacity: 0;
  transition: all linear 0.3s 0.2s;
}

.overly-portfolio:hover .portfolio-more {
  bottom: 1rem;
  opacity: 1;
}

.portfolio-more {
  position: absolute;
  bottom: 0rem;
  font-size: large;
  opacity: 0;
  font-weight: bold;
  transition: all linear 0.3s 0.2s;
}

.portfolio-column {
  flex: 100%;
  max-width: 100%;
}

.portfolio-container {
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
}

.tag-container .portfolio-tag {
  padding: 0.2rem;
  background-color: #ffffff;
  border-radius: 0.2rem;
  color: #378c3f;
}
.icon-more-portfolio {
  position: absolute;
  left: 3rem;
  transition: all ease 0.3s 0.2s;
}

.portfolio-more:hover {
  color: #9af9a3;
}

.portfolio-more:hover .icon-more-portfolio {
  left: 3.5rem;
  color: #9af9a3;
}
.portfolio-item {
  padding: 0.5rem;
  position: relative;
}

.portfolio-item img {
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
}

.overly-portfolio {
  position: absolute;
  background-color: #378c3f;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  transition: all ease 0.35s;
}

.overly-portfolio:hover {
  opacity: 0.8;
}

/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .portfolio-column {
    flex: 50%;
    max-width: 50%;
  }
}

</style>
