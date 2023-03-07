<template>
  <client-only>
    <nuxt-link v-if="!isMobile" :to="link" class="observationBall">{{
      text
    }}</nuxt-link>
    <nuxt-link v-else-if="isMobile" :to="link" class="observationBall"
      ><img width="26px" :src="text + '.svg'"
    /></nuxt-link>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      text: "informationen",
      link: "/#informationen",
    };
  },
  computed: {
    isMobile() {
      if (process.client) {
        if (window.innerWidth < 980) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  mounted() {
    //check wich elements are under the observationBall and log the ids
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "konzept") {
              this.text = "Informationen";
              this.link = "/#informationen";
            } else if (entry.target.id == "informationen") {
              this.text = "nach Oben";
              this.link = "/#oben";
            }
          }
        });
      },
      { threshold: [0.0] }
    );

    //oberve all elements
    const elements = document.querySelectorAll(".section");
    elements.forEach((element) => {
      observer.observe(element);
    });
  },
};
</script>

<style>
.observationBall {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  color: #000;
  font-size: 12px;
  text-align: center;
  transition: 1s ease-in-out;
}

@media (max-width: 980px) {
  .observationBall {
    width: 46px;
    height: 46px;
    bottom: 10px;
    right: 10px;
    background: #000;
    color: #fff;
  }
}
</style>