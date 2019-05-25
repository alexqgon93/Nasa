<template>
  <div class="exterior_1">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Forum Space Shuttle</v-toolbar-title>

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
    <v-container class="chat_whole">
      <div class="div_chat" id="content_chat"></div>
      <v-flex xs12 sm6 md3 class="bef_foot">
        <label>
          <input
            v-model="message"
            value="Write a comment"
            class="inp"
            @keyup.enter="sendMessage"
            id="myInput"
          >
        </label>
        <v-btn flat color="orange" v-on:click="sendMessage">Send</v-btn>
      </v-flex>
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
      drawer: false,
      input: null,
      user: null,
      name: null,
      email: null,
      photoUrl: null,
      uid: null,
      message: ""
    };
  },
  methods: {
    sendMessage() {
      //if the input is not empty, to avoid empty messages
      if (this.message.length > 0) {
        let input = document.getElementById("myInput");
        input.value = "";
        let name = firebase.auth().currentUser.displayName;
        let messageToSend = {
          nombre: name,
          mensaje: this.message
        };
        firebase
          .database()
          .ref("forum_s_s")
          .push(messageToSend);
      } else {
        alert("Message Field is Empty!!!");
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
    },
    getMessages() {
      firebase
        .database()
        .ref("forum_s_s")
        .on("value", data => {
          document.getElementById("content_chat").innerHTML = "";
          let content = document.getElementById("content_chat");
          let template = "";
          var user = firebase.auth().currentUser;
          for (let key in data.val()) {
            let element = data.val()[key];
            //if the message is from the currentuser
            if (element.nombre == user.displayName) {
              template += `
                    <div class="user">
                        <p class="par_user">${element.mensaje}</p>
                      </span>
                    </div>
            `;
            } else {
              template += `
                      <div class="not_user">
                        <span>
                          <p class="par_not_user"> ${element.nombre} ${
                element.mensaje
              }</p>
                        </span>
                      </div>
              `;
            }

            content.innerHTML = template;
          }
          document.getElementById(
            "content_chat"
          ).scrollTop = document.getElementById("content_chat").scrollHeight;
        });
    }
  },
  computed: {
    nameUser() {
      return this.$store.getters.getUser;
    }
  },
  created() {
    this.getMessages();
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
.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: black;
}
.primary {
  background-color: darkgray;
  border-color: darkgray;
}
.chat_div {
  margin-bottom: 20%;
}
.chat_whole {
  height: 76%;
  position: fixed;
}
.div_chat {
  overflow-y: scroll;
  background-color: #ece5dd;
  opacity: 0.9;
  border-radius: 3%;
  height: 100%;
  border: 1.5px solid black;
  scroll-behavior: smooth;
}
.bef_foot {
  margin-bottom: 10%;
}
.inp {
  background-color: white;
}
input.inp {
  width: 68%;
  border-radius: 5%;
}
button.v-btn.v-btn--flat.theme--light.orange--text {
  background-color: saddlebrown;
}
.user {
  color: black;
  margin-top: 2%;
  border-radius: 5%;
  background-color: #dcf8c6;
  margin-left: 52%;
  margin-right: 2%;
  word-break: break-all;
}
.not_user {
  color: black;
  margin-top: 2%;
  border-radius: 5%;
  background-color: floralwhite;
  margin-left: 2%;
  margin-right: 43%;
  word-break: break-all;
}
.par_user {
  border: 1px solid black;
  padding: 1.5%;
  text-align: start;
  border-radius: 3%;
}
.par_not_user {
  border: 1px solid black;
  padding: 1.5%;
  text-align: start;
  border-radius: 3%;
}
</style>