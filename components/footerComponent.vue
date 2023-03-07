<template>
  <footer>
    <div class="footer-container">
      <div class="link-container">
        <nuxt-link to="/impressum">Impressum</nuxt-link>
        <nuxt-link to="/datenschutzerklaerung">Datenschutzerklärung</nuxt-link>
        <a href="javascript:UC_UI.showSecondLayer();">Cookie-Einstellungen</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #151515;
  padding: 0 5vw;
}

.link-container a {
  color: var(--light-gray);
  text-decoration: none;
  margin: 0px 10px;
  transform: 0.3s;
}

.link-container a:hover {
  color: #efefef;
  text-decoration: none;
  margin: 0px 10px;
  transform: 0.3s;
}

@media (max-width: 980px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    padding: 5vh 5vw;
    height: auto;
  }

  .link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .link-container a {
    margin: 10px 0px;
  }
}
</style>