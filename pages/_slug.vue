<template>
  <div>
    <Header></Header>
    <div class="content-container">
      <nuxt-content :document="article" />
    </div>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.slug).fetch();

    return { article };
  },
};
</script>

<style>
.content-container {
  margin-top: 100px;
  padding: 0 5vw;
}

a {
  text-decoration: none;
}
</style>