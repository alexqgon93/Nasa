import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://api.nasa.gov/planetary/apod?api_key=",
    url_events: "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events",
    key: "CpOCSUpd1nY7lphH0kgr0xweoNBQ7cGKrFia1cTy",
    url_natural: "https://epic.gsfc.nasa.gov/api/natural",
    url_enhanched: "https://epic.gsfc.nasa.gov/api/enhanced",
    url_mars_pan: "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=PANCAM&api_key=",
    data: null,
    events: null,
    user: null,
    mars: null,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setEvents(state, payload) {
      state.events = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setMarsPan(state, payload) {
      state.mars = payload;
    }
  },
  getters: {
    getData: (state) => {
      return state.data;
    },
    getEvents: (state) => {
      return state.events;
    },
    getUser: (state) => {
      return state.user;
    },
    getMarsPan: (state) => {
      return state.mars;
    }
  },
  actions: {
    getData(context) {
      fetch(context.state.url + context.state.key)
        .then(r => r.json())
        .then(data => {
          context.commit("setData", data)
        });
      fetch(context.state.url_events)
        .then(r => r.json())
        .then(data => {
          context.commit("setEvents", data);
        });
      fetch("https://mars-photos.herokuapp.com/api/v1/rovers/Spirit/photos?sol=2")
        .then(r => r.json())
        .then(data => {
          console.log(data.photos);
          context.commit("setMarsPan", data.photos);
        });

      // fetch(context.state.url_mars_pan + context.state.key)
      //   .then(r => r.json())
      //   .then(data => {
      //     context.commit("setMarsPan", data);
      //   });
    },
  }
});
