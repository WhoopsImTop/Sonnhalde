<template>
  <div class="slider-container">
    <a href="/">
      <img class="logo" alt="sonnhalde Waldkirch" src="favicon.png" style="z-index: 92"/>
    </a>
    <transition-group name="fade" tag="div">
      <div
        v-for="(slide, index) in slides"
        :key="slide.subtitle + index"
        v-show="index == currentIndex"
      >
        <slide
          :title="slide.title"
          :subtitle="slide.subtitle"
          :backgroundImage="slide.background"
        ></slide></div
    ></transition-group>
  </div>
</template>

<script>
import slide from "./slide.vue";
export default {
  data() {
    return {
      currentIndex: 0,
      slides: [
        {
          background: "'/slides/sonnhalde-waldkirch-hd.jpeg'",
          title: "Sonnhalde Waldkirch",
          subtitle: "Eingebunden in Natur.",
        },
        {
          background: "'/slides/drohne.jpg'",
          title: "Sonnhalde Waldkirch",
          subtitle: "Aktuell im Bau",
        },
        {
          background: "'/slides/Sonnhalde_Expose_4.jpeg'",
          title: "Sonnhalde Waldkirch",
          subtitle: "Wohnungen direkt im Grünen",
        },
        {
          background: "'/slides/Sonnhalde_Expose_5.jpeg'",
          title: "Sonnhalde Waldkirch",
          subtitle: "Wohnen mit Blick ins Tal",
        },
        {
          background: "'/slides/Sonnhalde_Expose_6.jpeg'",
          title: "Sonnhalde Waldkirch",
          subtitle: "Nachhaltige Materialien",
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }, 5000);
  },
};
</script>

<style>
.slider-container {
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.logo {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 70px;
}

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
</style>