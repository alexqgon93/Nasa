<template>
  <div>
    <div id="mensajes"></div>
    <input type="text" name="text" v-model="input">
    <button v-on:click="login">Login</button>
    <button v-on:click="send">Send</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      input: null,
      user: null,
      name: null,
      email: null,
      photoUrl: null,
      uid: null
    };
  },
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          this.name = user.user.displayName;
          this.email = user.user.email;
          this.photoUrl = user.user.photoURL;
          this.emailVerified = user.user.emailVerified;
          this.uid = user.user.uid; // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
        });

      //to know if the user is loged or not
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("user loged");
        } else {
          console.log("user not loged");
        }
      });
    },
    send() {
      console.log("Pressed send messages");
    },
    getMessages() {}
  }
};
</script>

<style>
</style>
