<template>
  <div class="exterior_1">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Recovery</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-img src="no_user.jpg"></v-img>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-0" dense>
        <router-link to="/home">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/e_p">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Epic Earth Photos</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/e_i">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Epic Earth Info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/m_r_p">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Mars Rover Photos</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/m_r_i">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Mars Rover Info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/about">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Gerenal Info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <h1 class="font">Password Recovery</h1>
    <p
      class="font"
    >For us to send you and email, please write down your email and press the button below</p>
    <v-container>
      <form class="form_s">
        <v-text-field label="E-mail" v-model="email"></v-text-field>
        <div class="en_but">
          <v-btn v-on:click="sendMail">Send Recovery Password Email</v-btn>
        </div>
      </form>
    </v-container>

    <v-footer height="auto" color="grey" class="footer_div">
      <v-layout justify-center row wrap>
        <v-flex py-3 text-xs-center white--text xs12>
          &copy;2019 —
          <strong>NAEGSA</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
export default {
  data() {
    return {
      show1: false,
      selected: "",
      drawer: false,
      email: null
    };
  },
  methods: {
    sendMail() {
      if (this.email.length > 4) {
        firebase
          .auth()
          .sendPasswordResetEmail(this.email.toLowerCase())
          .then(() => {
            alert(
              "We have send to you the email for the password recovery. Go and check and recover your password. !!IMPORTANT EMAIL MAYBE PLACED IN THE SPAM FOLDER!!"
            );
            this.$router.push("/home");
          });
      } else {
        alert("Email is not well writed!!!!");
      }
    }
  }
};
</script>

<style>
.exterior_1 {
  background-image: url("/uniphoto.jpg");
  max-width: 100%;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
}

.p_day_div {
  color: white;
  text-align: justify;
}

.font {
  color: white;
  text-align: center;
}

.v-list.theme--dark {
  background-color: lightsteelblue;
  color: black;
}

.pa-0 {
  margin-top: 10%;
}

.v-list__tile__title {
  font-size: 25px;
}

.item {
  margin-bottom: 10%;
  font-size: 5%;
  color: white;
}

aside.v-navigation-drawer.v-navigation-drawer--absolute.v-navigation-drawer--open.v-navigation-drawer--temporary.theme--light {
  background-color: darkgrey;
}

nav.v-toolbar.theme--light {
  background-color: darkgray;
}

a.router-link-active {
  text-decoration: none;
}

.footer_div {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.form_s {
  margin-bottom: 15%;
}

label.v-label.theme--light {
  color: white;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
  background-color: white;
}

input[type="text"]:focus {
  background-color: rgba(255, 255, 255, 0.452);
  text-decoration-color: aliceblue;
}

.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: white;
}

.theme--light.v-icon {
  color: white;
}
</style>


