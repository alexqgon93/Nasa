<template>
  <div class="exterior_1" v-if="natural != null">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Epic Earth Photos</v-toolbar-title>

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
        <router-link to="/e_i">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Epic Camera Info</v-list-tile-title>
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
    <h1 class="font">Date selected</h1>
    <h1 class="font_date">{{date_selected}}</h1>

    <v-container v-if="hours !=null">
      <v-list>
        <template v-for="(event,index) in hours">
          <v-flex v-if="event.date" :key="index">
            <a dark v-on:click="getDates(event.image)" @click="dialog = true">{{event.date}}</a>
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
          <iframe :src="url" frameborder="0" allowfullscreen></iframe>
        </v-card>
      </v-dialog>
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
import firebase from "firebase";
export default {
  data() {
    return {
      dialog: false,
      drawer: false,
      na_hours: "https://epic.gsfc.nasa.gov/api/natural/date/",
      pic: "https://epic.gsfc.nasa.gov/archive/",
      hours: null,
      pressed: null,
      url: null
    };
  },
  methods: {
    getDates(foto) {
      if (this.pictures == "natural") {
        let date = this.date_selected.split("-").join("/");
        this.url =
          this.pic + this.pictures + "/" + date + "/png/" + foto + ".png";
      } else {
        let date = this.date_selected.split("-").join("/");
        this.url =
          this.pic + this.pictures + "/" + date + "/png/" + foto + ".png";
      }
    },
    getHours() {
      fetch(this.na_hours + this.date_selected)
        .then(r => r.json())
        .then(data => {
          this.hours = data;
        });
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
    },
    natural() {
      return this.$store.getters.getNatural;
    },
    date_selected() {
      return this.$store.getters.getDate;
    },
    pictures() {
      return this.$store.getters.getOption;
    }
  },
  created() {
    this.getHours();
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
.theme--light.v-select .v-select__selections {
  color: white !important;
}
.font_date {
  color: crimson;
  text-align: center;
}
iframe > img {
  width: 100%;
}
</style>


