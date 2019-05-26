<template>
  <div class="exterior_1">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text" v-if="!nameUser">Login</v-toolbar-title>
      <v-toolbar-title class="white--text" v-if="nameUser!=null">{{nameUser.displayName}}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-img v-if="nameUser" :src="nameUser.photoURL"></v-img>
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
    <h1 class="font">Login</h1>
    <v-container>
      <form class="form_s">
        <v-text-field label="Email" class="labels" v-model="email" style="color: white"></v-text-field>
        <v-text-field
          v-model="password"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
        ></v-text-field>
        <div class="en_but">
          <v-btn v-on:click="enter">Enter</v-btn>
        </div>
        <div class="but_log">
          <a v-on:click="login">
            <img src="google_icon.png" class="icon">
          </a>
          <a v-on:click="login_face">
            <img src="facebook_logo.png" class="icon">
          </a>
        </div>
      </form>
    </v-container>
    <h2 class="font">If you are not registered follow the link</h2>
    <div class="en_but">
      <router-link to="/s_u">
        <v-btn depressed small color="primary">Register</v-btn>
      </router-link>
    </div>
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
import firebase from "firebase";
export default {
  data() {
    return {
      drawer: false,
      show1: false,
      email: null,
      password: null
    };
  },
  methods: {
    login_face() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          this.$store.commit("setUser", user);
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
          this.$router.push("Home");
        })
        .catch(error => alert(error));
    },
    enter() {
      //check if the user is in the data base
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password.toLowerCase())
        .then(() => {
          this.$store.commit("setUser", this.email);
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
          this.$router.push("Home");
        })
        .catch(error => {
          alert(error);
        });
    },
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          this.$store.commit("setUser", user);
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
          this.$router.push("Home");
        })
        .catch(error => alert(error));
    }
  },
  computed: {
    nameUser() {
      return this.$store.getters.getUser;
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
  color: white;
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
.container_ep {
  margin-bottom: 10%;
}
.en_but {
  text-align: center;
}
.icon {
  width: 10%;
}
.but_log {
  text-align: center;
}
.labels {
  color: white;
}
.v-input__slot {
  color: purple;
}
</style>



