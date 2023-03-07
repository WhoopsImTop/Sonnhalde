<template>
  <div>
    <infobanner></infobanner>
    <observation-ball></observation-ball>
    <slider id="oben"></slider>
    <half-text-component
      v-for="(information, index) in $store.state.informationen"
      :key="index"
      :id="information.title.toLowerCase()"
      class="section"
      :title="information.title"
      :text="information.textContent"
      :image="information.image"
      :slider="information.slider"
      :sliderItems="information.sliderImages"
      :reverse="index % 2 == 0"
    ></half-text-component>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import infobanner from '~/components/infobanner.vue';
export default {
  components: { infobanner },
  name: "IndexPage",
  async asyncData({ params, store: { dispatch, getters } }) {
    await dispatch("fetchInformationen");
  },
  head() {
    return {
      title: "Sonnhalde Waldkirch | Eingebunden in die Natur",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
    };
  },
};
</script>

<style>
:root {
  --dark-primary: #151515;
  --white: #ffffff;
  --black: #111111;
  --light-gray: #ffffff80;
  --gray: #888888;
  --primary: #000000;
}

body {
  font-family: "poppins", sans-serif;
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 90px;
  line-height: 95px;
  margin: 0px;
  padding: 0px;
  color: var(--black);
}

h2 {
  font-size: 55px;
  line-height: 65px;
  margin: 0px;
  padding: 0px;
  color: var(--black);
}

h3 {
  font-size: 30px;
  line-height: 35px;
  margin: 0 0 20px;
  padding: 0px;
  color: var(--black);
  font-weight: 600;
}

.top-container {
  overflow: hidden !important;
  padding-top: 35vh;
  padding-bottom: 40vh;
  padding-left: 5vw;
  background-image: url("/sonnhalde-waldkirch-hd.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

a {
  text-decoration: none;
  font-size: 20px;
}

p {
  font-size: 16px;
  line-height: 1.8em;
}

.button-secondary {
  color: var(--gray);
  padding: 10px 25px;
  transition: 0.5s ease;
}

.button-secondary:hover {
  background-color: var(--dark-primary);
  color: var(--white);
  border-radius: 5px;
  padding: 10px 25px;
  transition: 0.5s ease;
}

.button-primary {
  background-color: var(--primary);
  color: #ffffff;
  border-radius: 5px;
  opacity: 1;
  padding: 10px 25px;
  transition: 0.5s ease;
  font-size: 20px;
  margin-right: 10px;
}

.button-primary:hover {
  background-color: var(--dark-primary);
  transition: 0.5s ease;
}

.action-container {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  animation: flyIn 1s ease-in-out;
}

@keyframes flyIn {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.grid-container {
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  color: var(--white);
  margin-top: 40px;
}

.grid-container p {
  margin: 0px;
}

h4 {
  font-size: 22px;
  text-align: center;
}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  background-color: var(--dark-primary);
  align-items: center;
  transition: 0.5s;
  border-radius: 10px;
  padding: 35px;
}

.grid-item5 {
  border-radius: 10px;
  padding: 35px;
  background-position: right;
  background-repeat: no-repeat;
  background-color: var(--dark-primary);
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  background-color: var(--dark-primary);
  align-items: center;
  transition: 0.5s;
}

.grid-item5 p {
  max-width: 300px;
}

.grid-item5 h4 {
  text-align: left;
}

.grid-image {
  margin: 0 auto;
}

.certificate-container {
  margin-top: 16px;
  background-color: var(--dark-primary);
  padding: 10px 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  flex-wrap: wrap;
}

.certificate-text {
  font-size: 20px;
  margin-right: 10px;
}

.about-container {
  margin: 10vh 0;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about-text {
  margin-bottom: 10vh;
}

.point-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.point-text {
  width: 350px;
}

.preis-container {
  background-image: url("/price-background.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 55vh 5vw;
}

.price-heading {
  color: var(--primary);
  font-weight: bold;
}

.what-text {
  font-size: 18px;
  margin-top: -10px;
}

.size {
  background-image: url("/size-background.svg");
  font-size: 70px;
  background-size: contain;
  background-position: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  font-weight: bold;
}

.price {
  margin-top: 30px;
  display: flex;
  align-items: baseline;
}

.price-text {
  font-size: 30px;
  font-weight: bold;
  margin-right: 10px;
}

.price-number {
  font-size: 60px;
  font-weight: bold;
}

.price-highlight {
  position: absolute;
  bottom: -65px;
  background-color: var(--dark-primary);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.highlight-text {
  background: var(--primary);
  width: 100%;
  text-align: center;
  padding: 20px 0;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 18px;
  margin: 5px;
}

.info-text {
  position: relative;
  top: 10vh;
}

@media (min-width: 1400px) {
  .grid-item1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .grid-item2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .grid-item3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .grid-item4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .grid-item5 {
    display: block;
    background-image: url("/background-image.svg");
    background-size: cover;
    background-position: right;
    grid-area: 2 / 1 / 2 / 3;
  }
  .grid-item6 {
    grid-area: 2 / 3 / 2 / 4;
  }
  .grid-item7 {
    grid-area: 2 / 4 / 3 / 5;
  }
}

@media (max-width: 775px) {
  h1 {
    font-size: 50px;
    line-height: 55px;
  }

  h2 {
    font-size: 35px;
    line-height: 40px;
  }

  h3 {
    font-size: 25px;
    line-height: 30px;
  }

  .certificate-container {
    justify-content: flex-start;
    width: auto;
    flex-wrap: wrap;
  }

  .point-text {
    width: 100%;
  }

  .about-container {
    flex-wrap: wrap;
  }

  .about-container .avatar {
    margin-top: 60px;
  }

  .price-highlight {
    display: none;
  }

  .preis-container {
    padding: 55vh 5vw 70vh 5vw;
  }
}
</style>