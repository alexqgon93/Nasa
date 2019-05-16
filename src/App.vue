<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  },
  created() {
    this.$store.dispatch("getData");
    this.getUser();
  },
  methods: {
    //we check if the user is loged or not
    getUser() {
      //to know if the user is loged or not
      firebase.auth().onAuthStateChanged(user=> {
        if (user) {
          //console.log("user loged");
          //alert("hi ha user");
          this.$store.commit("setUser",user);
          //console.log(this.$store.getters.getUser);
        } else {
          alert("NO hi ha user");
          //console.log("user not loged");
        }
      });
    }
  }
};
</script>
