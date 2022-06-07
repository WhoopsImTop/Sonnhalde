<template>
  <div class="about-container">
    <div>
      <div class="about-text">
        <h2 id="ueber-mich">Über mich.</h2>
        <h3>und mein Lebenslauf.</h3>
      </div>
      <div>
        <div
          class="point-container"
          v-for="(punkt, index) in lebenslauf"
          :key="index"
        >
          <img
            width="50px"
            height="50px"
            :src="punkt.status == 'check' ? '/check.svg' : '/wait.svg'"
            alt="check"
          />
          <span style="margin: 0 10px">{{ punkt.year }}</span>
          <hr style="width: 40px; border: 1px solid #888888" />
          <p class="point-text" style="margin: 0 10px" v-html="punkt.text"></p>
        </div>
      </div>
    </div>
    <div>
      <img
        width="100%"
        class="avatar"
        src="/elias-englen.webp"
        alt="elias-englen"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lebenslauf: [
        {
          year: "2016",
          text: "Realschulabschluss an der in Realschule Kollnau.",
          status: "check",
        },
        {
          year: "2019",
          text: "Abschluss an der GLG Freiburg zum <br> Staatlich geprüften Grafikdesigner.",
          status: "check",
        },
        {
          year: "2019",
          text: "Grafik-, UI-/UX- Designer bei der <br> geOps GmbH.",
          status: "check",
        },
        {
          year: "2021",
          text: "Antritt eines Medieninformatik <br> Studiums an der HS Furtwangen.",
          status: "wait",
        },
      ],
    };
  },
  mounted() {
    //check if .point-container is in the Viewport if so animate it in
    const pointContainers = document.querySelectorAll(".point-container");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    });
    pointContainers.forEach((pointContainer) => {
      observer.observe(pointContainer);
    });
  },
};
</script>

<style>
.animate {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>