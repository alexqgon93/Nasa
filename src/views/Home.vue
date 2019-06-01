<template>
  <div class="exterior_1" v-if="data != null">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Home - Nasa</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark icon>
            <v-btn icon>
              <v-img v-if="nameUser" :src="nameUser.photoURL" v-on="on"></v-img>
              <v-img v-else src="no_user.jpg"></v-img>
            </v-btn>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile>
            <v-list-tile-title v-on:click="logout">Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- <v-btn icon>
        <v-img v-if="nameUser" :src="nameUser.photoURL"></v-img>
        <v-img v-else src="no_user.jpg"></v-img>
      </v-btn>-->
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-0" dense>
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
        <!-- <a v-on:click="logout" v-if="nameUser">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </a>-->
        <router-link to="/about">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Gerenal Info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/l" v-if="!nameUser">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <h1
      class="font_1"
      v-if="(nameUser!=null)&&(nameUser.displayName!=null)"
    >Welcome {{nameUser.displayName}}</h1>
    <!-- <h1 class="font_1" v-if="(nameUser!=null)&&(nameUser.email)">Welcome {{nameUser.email}}</h1> -->
    <h1 class="font">Picture of the day</h1>

    <div class="p_day_div">
      <v-container>
        <v-img :src="data.hdurl" class="grey lighten-2" :lazy-src="data.hdurl" aspect-ratio="1">
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="blue"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-container>
      <v-container>
        <p class="p_day_div">{{data.explanation}}</p>
      </v-container>
    </div>
    <div class="font">
      <h1>Recently updates</h1>

      <v-container v-if="events !=  null">
        <v-list>
          <template v-for="(event,index) in events.events">
            <v-flex v-if="((getUrl(event.sources[0])))" :key="index">
              <a
                dark
                @click="dialog = true"
                v-on:click="pressed = event.sources[0].url"
              >{{event.title}}</a>
            </v-flex>
          </template>
        </v-list>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Content Info</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <iframe :src="pressed" frameborder="0" allowfullscreen></iframe>
          </v-card>
        </v-dialog>
      </v-container>
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
/* eslint-disable*/
import firebase from "firebase";
export default {
  data() {
    return {
      dialog: false,
      drawer: false,
      pressed: null
    };
  },
  methods: {
    getUrl(url) {
      if (!url) {
        return false;
      } else {
        if (url.url.includes("txt")) {
          return false;
        } else if (url.url.includes("csv")) {
          // console.log(url.url, "csv", false);
          return false;
        } else if (url.url.includes("tcw")) {
          // console.log(url.url, "tcw", false);
          return false;
        } else if (url.url.includes("ascat")) {
          return false;
        } else {
          return true;
        }
      }
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
    data() {
      return this.$store.getters.getData;
    },
    events() {
      return this.$store.getters.getEvents;
    },
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
}
.p_day_div {
  color: white;
  text-align: justify;
  font-family: "Open Sans", sans-serif;
  font-size: 1.1em;
}
.font {
  color: white;
  text-align: center;
}
.v-list.theme--dark {
  background-color: lightsteelblue;
  color: black;
}
.v-list.theme--light {
  margin-bottom: 15%;
  opacity: 0.8;
  -moz-border-radius: 5px;
  border-radius: 5px;
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
.v-toolbar__content .v-btn--icon,
.v-toolbar__extension .v-btn--icon {
  margin: 0;
}
a {
  text-decoration: none;
}
iframe {
  position: absolute;
  height: 100%;
  width: 100%;
}
.footer_div {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.font_1 {
  color: powderblue;
  text-align: center;
}
</style>
