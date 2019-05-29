<template>
  <div class="exterior_1">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Registration</v-toolbar-title>

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
    <h1 class="font">Sign up</h1>
    <v-container>
      <form class="form_s">
        <v-text-field label="E-mail" v-model="form.email"></v-text-field>
        <v-text-field label="Name" v-model="form.name"></v-text-field>
        <v-text-field
          v-model="form.password"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
        ></v-text-field>
        <v-checkbox
          label="I agree to NAEGSA's storage and processing of my personal data"
          v-model="form.accepted"
        ></v-checkbox>
        <div class="en_but">
          <v-btn v-on:click="Register">Register</v-btn>
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
      form: {
        name: null,
        email: null,
        password: null,
        accepted: null
      }
    };
  },
  methods: {
    Register() {
      if (this.form.accepted != null) {
        if (this.form.email.length < 4) {
          alert("Please enter an email address.");
          return;
        } else {
          if (this.form.name.length > 1) {
            if (this.form.password != null) {
              firebase
                .auth()
                .createUserWithEmailAndPassword(
                  this.form.email.toLowerCase(),
                  this.form.password.toLowerCase()
                )
                .then(() => {
                  alert("Congrats you have been succesfully registred");
                  firebase
                    .auth()
                    .currentUser.updateProfile({
                      displayName: this.form.name,
                      photoURL: "new_user.png"
                    })
                    .then(() => {
                      this.$store.commit(
                        "setUser",
                        firebase.auth().currentUser
                      );
                      this.$router.push("Home");
                    });
                })
                .catch(function(error) {
                  alert(error.message);
                  return;
                });
            } else {
              alert("Password need to be filled");
              return;
            }
          } else {
            alert("Name should filled in with a correct name!!!");
          }
        }
      } else {
        alert("You must accept the treatment of your information!!!");
        return;
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


