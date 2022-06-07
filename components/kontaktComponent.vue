<template>
  <div class="kontakt-container">
    <div>
      <h2 id="kontakt">Kontakt.</h2>
      <h3 style="margin-bottom: 5vh">mit mir aufnehmen.</h3>

      <p>
        <a href="mailto:info@elias-englen.de">info@elias-englen.de</a> <br />
        <a href="tel:+4915233592058">+49 152 33 59 20 58</a>
      </p>
      <p>
        Elias Englen <br />
        Kiefernweg 12 <br />
        79183 Waldkirch
      </p>
      <p>
        Am besten erreichst du mich von <br />
        Montag-Freitag von 08:00-16:30 Uhr.
      </p>
    </div>
    <div>
      <div>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Vorname</label>
            <input
              v-model="kontaktAnfrage.vorname"
              type="text"
              class="form-control"
              id="vorname"
              placeholder="Vorname"
            />
          </div>
          <div class="form-group">
            <label for="name">Nachname</label>
            <input
              v-model="kontaktAnfrage.nachname"
              type="text"
              class="form-control"
              id="nachname"
              placeholder="Nachname"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="kontaktAnfrage.email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="anfrage">Anfrage für</label>
            <select
              v-model="kontaktAnfrage.anfrage"
              style="min-width: 100%"
              type="select"
              class="form-control"
              id="anfrage"
            >
              <option>Bitte auswählen</option>
              <option>Webdesign</option>
              <option>Webentwicklung</option>
              <option>3D Modelierung</option>
              <option>Illustrationen</option>
              <option>Prototyping</option>
              <option>Logo Entwicklung</option>
              <option>CI Entwicklung</option>
              <option>SEO optimierung</option>
              <option>Beratung</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="message">Nachricht</label>
          <textarea
            v-model="kontaktAnfrage.nachricht"
            class="form-control"
            id="message"
            rows="3"
          ></textarea>
        </div>
        <button
          @click="submitForm"
          class="button-primary"
          style="
            outline: none;
            margin-left: 8px;
            margin-top: 16px;
            border: none;
          "
        >
          {{ buttonText }}
        </button>
      </div>
    </div>

    <EmailNotification
      :text="text"
      :subText="subText"
      :show="show"
    ></EmailNotification>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      subText: "",
      show: false,
      buttonText: "Senden",
      kontaktAnfrage: {
        vorname: "",
        nachname: "",
        email: "",
        anfrage: "Bitte auswählen",
        nachricht: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.buttonText = "Senden...";
      axios
        .post("https://kjg-api.rezept-zettel.de/api/anfragen/", {
          vorname: this.kontaktAnfrage.vorname,
          nachname: this.kontaktAnfrage.nachname,
          email: this.kontaktAnfrage.email,
          betreff: this.kontaktAnfrage.anfrage,
          nachricht: this.kontaktAnfrage.nachricht,
        })
        .then((response) => {
          console.log(response);
          this.show = true;
          this.text = "Vielen Dank für deine Anfrage!";
          this.subText = "Ich melde mich schnellstmöglich bei dir";
          this.kontaktAnfrage.vorname = "";
          this.kontaktAnfrage.nachname = "";
          this.kontaktAnfrage.email = "";
          this.kontaktAnfrage.anfrage = "Bitte auswählen";
          this.kontaktAnfrage.nachricht = "";
          this.buttonText = "Senden";
        })
        .catch((error) => {
          console.log(error);
          this.show = true;
          this.text = "Es ist ein Fehler aufgetreten.";
          this.subText =
            "Bitte versuche es noch einmal oder kontaktiere mich per Email.";
          this.kontaktAnfrage.vorname = "";
          this.kontaktAnfrage.nachname = "";
          this.kontaktAnfrage.email = "";
          this.kontaktAnfrage.anfrage = "Bitte auswählen";
          this.kontaktAnfrage.nachricht = "";
          this.buttonText = "Senden";
        });

      setTimeout(() => {
        this.show = false;
      }, 5000);
    },
  },
};
</script>

<style>
.kontakt-container {
  color: var(--light-gray);
  text-decoration: none;
  padding: 20vh 5vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.kontakt-container p {
  font-size: 20px;
}

.kontakt-container a {
  color: var(--light-gray);
  text-decoration: none;
}

input,
select,
textarea {
  padding: 15px 10px;
  border-radius: 10px;
  outline: none;
  border: 2px solid var(--white);
  border-radius: 5px;
  background-color: transparent;
  color: var(--white);
  font-size: 20px;
  font-family: "Poppins", sans-serif;
}

select {
  width: 100% !important;
}

option {
  background-color: var(--black);
  padding: 10px 5px;
}

.form-row .form-group {
  width: 47%;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 8px 8px;
}

.form-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .kontakt-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 10vh 5vw;
  }
  .kontakt-container div {
    width: 100%;
  }

  .form-row .form-group {
    width: 100%;
  }

  textarea {
    width: 88%;
  }
}
</style>