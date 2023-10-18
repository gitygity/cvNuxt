<template>
   
      <div v-for="(education, index) in educations" :key="index" class="card-education">
       
        <div class="top-section">
          <p>{{education?.startDate+" - "+education?.endDate}}</p>
          <h3>{{ education?.degree }}</h3>
        </div>
        <div class="bottom-section">
          <h3>{{ education?.field }}</h3>
          <p>{{ education?.description }}</p>
        </div>
      </div>
</template>

<script setup lang="ts">

const {data:educations}=await useFetch('/api/education/education')
</script>

<style scoped lang="css">
.bottom-section {
  flex: 100%;
  padding: 2rem;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  color: rgb(96, 97, 97);
  background-color: white;
  line-height: 0.3rem;
}

.top-section {
  flex: 100%;
  padding: 2rem;
  margin: auto;
  width: 100%;
  background-color: #378c3f;
  color: white;
  text-align: center;
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
}

.card-education {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  height: 18rem;
}

.top-section p {
  display: inline-block;
}

/* Big screen devices (889px and above) */
@media only screen and (min-width: 889px) {
  .top-section {
    flex: 40%;
    padding: 2rem;
    height: inherit;
    margin: auto;
    background-color: #378c3f;
    color: white;
    text-align: center;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  .top-section p {
    display: inline-block;
  }

  .bottom-section {
    flex: 60%;
    padding: 2rem;
    height: inherit;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    color: rgb(96, 97, 97);
    background-color: white;
    line-height: 0.3rem;
  }
  .card-education {
    margin-top: 2rem;
    flex-direction: row;
    height: 9rem;
  }
}
</style>
