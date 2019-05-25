<template>
  <div class="exterior_1">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Forum Mars Missions</v-toolbar-title>

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
              <v-list-tile-title>Epic Camera</v-list-tile-title>
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
        <router-link to="/forum" v-if="nameUser">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Forum</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <a v-on:click="logout" v-if="nameUser">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>
        <router-link to="/about">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Gerenal Info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-container>
      <!-- <div id="mensajes"></div>
      <input type="text" name="text" v-model="input">
      <button v-on:click="send">Send</button>-->
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Inside get the messages from the other users</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <!--Need to put anbd unpit so we can talk, diferents user talks--->
              <v-btn flat color="orange">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer height="auto" color="grey" class="footer_div">
      <v-layout justify-center row wrap>
        <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
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
      input: null,
      user: null,
      name: null,
      email: null,
      photoUrl: null,
      uid: null,
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    };
  },
  methods: {
    send() {
      console.log("Pressed send messages");
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            //we need to change the user in storage to complete the logout
            this.$store.commit("setUser", null);
            this.$router.push("/");
          },
          function(error) {
            console.error("Sign Out Error", error);
          }
        );
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
</style>

