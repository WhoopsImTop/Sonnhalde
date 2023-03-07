<template>
  <div class="halfTextComponent" :class="reverse ? 'rev' : ''">
    <div class="halfTextComponent__text col">
      <div class="col-text">
        <h2 style="margin-bottom: 20px">{{ title }}</h2>
        <p v-html="$md.render(text)"></p>
      </div>
    </div>
    <div
      class="halfTextComponent__image col"
      :style="sliderItems ? '' : 'background-image: url(' + image + ')'"
    >
      <small-slider
        class="slider-component"
        v-if="slider"
        :slides="sliderItems"
      ></small-slider>
    </div>
  </div>
</template>

<script>
import smallSlider from "./smallSlider.vue";
export default {
  components: { smallSlider },
  props: {
    title: String,
    text: String,
    image: String,
    slider: Boolean,
    sliderItems: Array,
    reverse: Boolean,
  },
};
</script>

<style>
.halfTextComponent {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  min-height: 100vh;
}

.halfTextComponent.rev {
  flex-direction: row;
}

.col {
  flex-direction: column;
  width: 50%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  min-height: 300px;
}

.halfTextComponent__text {
  display: flex;
  justify-content: flex-end;
}

.col-text {
  padding: 50px 70px 50px;
}

.halfTextComponent__text a {
  color: var(--dark-primary);
  font-size: 16px;
  display: flex;
  font-weight: 600;
  align-items: center;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  outline: 0;
  font-family: Poppins, sans-serif !important;
  padding: 0;
  border: none;
  background-color: #fff;
}

.halfTextComponent__text a:after {
  background-image: url(/arrow.svg);
  background-size: contain;
  background-position-x: -10px;
  transition: 0.5s ease-in-out;
}

.halfTextComponent__text a:after,
.halfTextComponent__text a:hover:after {
  content: " ";
  display: flex;
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.halfTextComponent__text a:hover:after {
  background-image: url(/arrow.svg);
  background-size: contain;
  background-position-x: 0;
  transition: 0.3s ease-in-out;
}

.halfTextComponent__text a:hover {
  cursor: pointer;
}

@media (max-width: 980px) {
  .halfTextComponent {
    flex-direction: column !important;
  }

  .halfTextComponent__image {
    width: 100%;
  }

  .halfTextComponent__text {
    width: 100%;
  }

  .halfTextComponent__text a {
    margin-top: 20px;
  }

  .halfTextComponent__text a:after {
    margin-left: 0;
  }

  .col-text {
    padding: 10px;
  }

  .halfTextComponent__text {
    width: unset;
    padding: 20px;
  }
}
</style>