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
    this.getUser;
  },
  methods: {
    //we check if the user is loged or not
    getUse() {
      //to know if the user is loged or not
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          //console.log("user loged");
          this.$store.commit.setUser(user);
        } else {
          //console.log("user not loged");
        }
      });
    }
  }
};
</script>
