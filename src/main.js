import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import firebase from "firebase";
import firebase from 'firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyA-bm3wvpVbudFEquDBVaxRp4lHetCdWck",
      authDomain: "nasa-forum.firebaseapp.com",
      databaseURL: "https://nasa-forum.firebaseio.com",
      projectId: "nasa-forum",
      storageBucket: "nasa-forum.appspot.com",
      messagingSenderId: "666560210971",
      appId: "1:666560210971:web:a01c708064e6bbf8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}).$mount("#app");


