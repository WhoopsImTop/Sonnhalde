<template>
  <footer>
    <div class="footer-container">
        <footerLogo></footerLogo>
        <div class="link-container">
            <nuxt-link to="/impressum">Impressum</nuxt-link>
            <nuxt-link to="/datenschutzerklaerung">Datenschutzerklärung</nuxt-link>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: #222222;
    padding: 0 5vw;
}

.link-container a {
    color: var(--light-gray);
    text-decoration: none;
    margin: 0px 10px;
    transform: .3s;
}

.link-container a:hover {
    color: var(--primary);
    text-decoration: none;
    margin: 0px 10px;
    transform: .3s;
}

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        align-items: center;
        padding: 5vh 5vw;
        height: auto;
    }

    .link-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 20px
    }
}
</style>