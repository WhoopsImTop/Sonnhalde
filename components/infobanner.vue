<template>
  <div v-if="!cookie" class="verkaufsinformation">
    <button class="button" @click="close">
      <img width="25px" src="close.svg" />
    </button>
    <h4>Bereits 80% verkauft!</h4>
    <h5 style="color: #ffffff; margin: 10px 0 0">
      Förderfähig als “Klimafreundlicher Neubau” (KfW)
    </h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookie: false,
    };
  },
  methods: {
    close() {
      this.$el.style.display = "none";
    },
  },
};
</script>

<style>
.verkaufsinformation {
  background-color: #000000;
  padding: 40px 20px 20px;
  text-align: center;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
  z-index: 999;
}

.verkaufsinformation h3,
.verkaufsinformation h4 {
  color: #fff !important;
  margin: 0;
}

.button {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}

@media (max-width: 980px) {
  .verkaufsinformation {
    top: 0;
    left: 0;
    right: 0;
    transform: none;
    transform: unset;
  }
}
</style>
