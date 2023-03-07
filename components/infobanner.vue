<template>
  <div v-if="!cookie" class="verkaufsinformation">
    <button class="button" @click="close">
      <img width="25px" src="close.svg" />
    </button>
    <h3>1. Bauabschnitt</h3>
    <h4>50% verkauft!</h4>
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
      //set browser cookie
      document.cookie = "verkaufsinformation=1; max-age=31536000; path=/";
      //hide element
      this.$el.style.display = "none";
    },
  },
  mounted() {
    //get browser cookie
    var name = "verkaufsinformation=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          this.cookie = c.substring(name.length, c.length);
        }
      }
      this.cookie = this.cookie == 1 ? true : false;
  }
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