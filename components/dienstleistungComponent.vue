<template>
  <div class="dienstleistungscontainer">
    <h2 id="dienstleistungen">Dienst&shy;leistungen.</h2>
    <h3 style="color: #ffffff80">Die ihr Business Boosten.</h3>

    <div class="grid-container">
      <div class="grid-item grid-item1">
        <img
          width="60px"
          class="grid-image"
          src="/wordpress.svg"
          alt="wordpress"
        />
        <h4>Wordpress</h4>
        <p>
          Erstellen von WordPress Webseiten auf Basis von einem Screendesign
          erstellt in Adobe XD oder anderen Prototyping Tools.
        </p>
      </div>
      <div class="grid-item grid-item2">
        <img width="60px" class="grid-image" src="/vuejs.svg" alt="wordpress" />
        <h4>VueJS</h4>
        <p>
          Erstellen von Webseiten mit dem Javascript Framework VueJs. Hiermit
          können alle besondern wünsche umgesetzt werden.
        </p>
      </div>
      <div class="grid-item grid-item3">
        <img
          width="60px"
          class="grid-image"
          src="/blender.svg"
          alt="wordpress"
        />
        <h4>Blender</h4>
        <p>
          Erstellen von 3D Modellen in Blender. Bspw. Produkt- designs,
          Messestände, 3D Druckmodelle.
        </p>
      </div>
      <div class="grid-item grid-item4">
        <img
          width="60px"
          class="grid-image"
          src="/illustration.svg"
          alt="wordpress"
        />
        <h4>illustration</h4>
        <p>
          Erstellen von Illustrationen oder Infografiken für ihre
          Unternehmenslösungen.
        </p>
      </div>
      <div class="grid-item5">
        <img width="60px" class="grid-image" src="/adobe.svg" alt="wordpress" />
        <h4>Adobe XD</h4>
        <p>
          Erstellen von Designs und Klickprototypen in Adobe XD. Weitergabe an
          Entwickler oder Eingenentwicklung.
        </p>
      </div>
      <div class="grid-item grid-item6">
        <img width="60px" class="grid-image" src="/icon.svg" alt="wordpress" />
        <h4>Logo / CI Entwicklung</h4>
        <p>
          Erstellen von Logos und/oder einer Corporate Identity für ihr
          Unternehmen. Erstellen von Flyern und Unternehmensmaterialien.
        </p>
      </div>
      <div class="grid-item grid-item7">
        <img
          width="70px"
          class="grid-image"
          src="/beratung.svg"
          alt="wordpress"
        />
        <h4>Beratung</h4>
        <p>
          Beratung zum Thema Werbemaßnahmen, Corporate Identity oder Webdesign.
        </p>
      </div>
    </div>
    <div class="certificate-container">
      <span class="certificate-text">Online Marketing Zertifiziert von</span
      ><img src="/google.svg" alt="google" />
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        let gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach(gridItem => {
            gridItem.addEventListener("click", () => {
                scrollTo({
                    top: document.getElementById("kontakt").offsetTop,
                    behavior: "smooth"
                })
            });
        });
        let xd = document.querySelector(".grid-item5");
        xd.addEventListener("click", () => {
            scrollTo({
                top: document.getElementById("kontakt").offsetTop,
                behavior: "smooth"
            })
        });
    }
};
</script>

<style>
.grid-item, .grid-item5 {
    transition: all 0.3s ease-in-out;
}

.grid-item:hover, .grid-item5:hover {
    cursor: pointer;
    transform: scale(1.02);
}
</style>