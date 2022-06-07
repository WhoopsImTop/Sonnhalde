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

h3, h4 {
  color: var(--white);
}

p {
  font-size: 18px;
  color: var(--light-gray);
}

a {
  text-decoration: none;
  color: var(--light-gray);
}
</style>