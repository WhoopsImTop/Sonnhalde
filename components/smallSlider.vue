<template>
  <div class="small-slider-container">
    <transition-group name="fade" tag="div">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        v-show="index == activeIndex"
      >
        <slide :subtitle="slide.title" :backgroundImage="slide.img"></slide>
      </div>
    </transition-group>
  </div>
</template>

<script>
import slide from "./slide.vue";
export default {
  props: {
    slides: Array,
  },
  data() {
    return {
      activeIndex: 0,
      nextIndex: 1,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.activeIndex < this.slides.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    }, 5000);
  },
};
</script>

<style scoped>
.small-slider-container {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 50%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 50%;
  opacity: 0;
}

@media (max-width: 980px) {
  .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
}
</style>