<template >
  <section>
    <footer>
      <div class="footer-social-media">
    <TheFooterSocial></TheFooterSocial>
    <TheFooterCopyRight></TheFooterCopyRight>
      </div>
    </footer>
  </section>
</template> 

<script setup lang="ts">
import TheFooterSocial from './TheFooterSocial.vue';
import TheFooterCopyRight from './TheFooterCopyRight.vue';
</script>


<style scoped lang="css">

footer{
  height: auto;
  padding: 1rem 0rem;
  background-color: rgb(66, 67, 69);
}

.footer-social-media {
  color: white;
  text-align: center;
  width: 100%;
  margin: 1rem 0rem;
}
</style>
