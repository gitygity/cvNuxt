<template>
    <div class="card">
      <div  v-for="(refer,index) in references" :key="index"  class="refere-container">
        <div class="info-refer">
          <img class="refer-thumbnail" :src="refer?.image" :alt="'person'+index" />
          <div class="refer-name">
            <h4>{{ refer?.firstName+" "+refer?.lastName }}</h4>
            <span>{{ refer?.stack }}</span>
          </div>
        </div>
        <div class="refer-qoute">
          <font-awesome-icon icon="fa-solid fa-quote-left" size="2xl" />
          <p>
           {{ refer?.referText }}
          </p>
        </div>
      </div>
      
    </div>
</template>

<script setup lang="ts">
import {IconButton} from "../shared"
const handleClick=()=>{
  console.log("clicked education")
}
const {data:references}=useFetch("/api/references/references")
</script>


<style scoped lang="css">
.refer-thumbnail {
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  object-fit: cover;
  margin: 1rem 0rem;
}

.refere-container {
  display: flex;
  flex-direction: column;
}

.info-refer span {
  line-height: 1.5rem;
}

.refer-name {
  display: flex;
  flex-direction: column;
  margin-left: 0.6rem;
}

.refer-qoute {
  display: flex;
  flex-direction: row;
}

.refere-container :deep(.fa-quote-left)   {
  color: #bedfc1 ;
  font-size: xx-large;
  margin-right: 1rem;
}

.info-refer {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
/* Small screen devices (600px and above) */
@media only screen and (min-width: 600px) {
  .card {
    padding: 2rem;
  }
}

/* Medium screen devices (768px and above) */
@media only screen and (min-width: 768px) {

  .card section {
    padding: 1rem 0;
  }
  .refere-container {
    display: flex;
    flex-direction: row;
    margin: 2rem 2rem;
  }

  .info-refer {
    align-items: flex-start;
    flex-direction: column;
  }

  .refer-qoute {
    margin-left: 1rem;
  }
}

.card section {
  padding: 1rem 0;
}

.card {
  padding: 2rem;
  margin: 3rem 0rem;
  border-radius: 0.2rem;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
}

</style>
