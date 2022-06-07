<template>
  <div class="navbar glass">
    <div class="navbar-inner-container">
      <nuxt-link to="/" style="display: flex; align-items: center">
        <EliasenglenLogoLong></EliasenglenLogoLong>
      </nuxt-link>
      <div
        class="burger"
        @click="active = !active"
        :class="active ? 'active' : ''"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div
        class="navigation-container"
        :style="active ? 'display: flex' : 'display: none'"
        @click="active = !active"
      >
        <nuxt-link to="/#dienstleistungen"><h2>Dienstleistungen</h2></nuxt-link>
        <nuxt-link to="/#ueber-mich"><h2>Über mich</h2></nuxt-link>
        <nuxt-link to="/#preisgestaltung"><h2>Preisgestaltung</h2></nuxt-link>
        <nuxt-link to="/#kontakt"><h2>Kontakt</h2></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
.navbar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  opacity: 1;
  z-index: 999;
}

.glass {
background: rgba(255, 255, 255, 0) !important;
backdrop-filter: blur(15.3px);
-webkit-backdrop-filter: blur(15.3px);
}

.burger .line1,
.burger .line2,
.burger .line3 {
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
  border-radius: 5px;
  transition: 0.5s;
}

.burger {
  height: 30px;
}

.burger.active .line2 {
  width: 0px;
  transition: 0.3s;
}

.burger.active .line3 {
  transform: translateY(-7.5px) rotate(45deg);
  transition: 0.5s;
}

.burger.active .line1 {
  transform: translateY(7.5px) rotate(-45deg);
  transition: 0.5s;
}

.navbar-inner-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  z-index: 999;
  padding: 0 5vw;
}

.navigation-container {
  display: flex;
  position: fixed;
  top: 70px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  flex-direction: column;
  padding-top: 15vh;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--black);
  z-index: 999;
}

.navigation-container a h2{
  text-decoration: none;
  color: #fff;
  margin: 20px 0px;
  transition: 0.5s ease;
}

.navigation-container a:hover h2 {
  color: var(--primary);
  transition: 0.5s ease;
}
</style>