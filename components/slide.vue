<template>
  <div
    class="slide"
    :style="
      'background-image: url(' +
      backgroundImage +
      '); background-size: cover; background-position: 50%; background-repeat: no-repeat;'
    "
  >
    <div class="slide-textblock">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    backgroundImage: String,
  },
};
</script>

<style>
.slide {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.slide h2,
.slide h3 {
  color: white;
}

.slide h3 {
  font-weight: 500;
}

.slide-textblock {
  padding: 20px 30px;
}
</style>