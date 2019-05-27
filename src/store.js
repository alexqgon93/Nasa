import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://api.nasa.gov/planetary/apod?api_key=",
    url_events: "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events",
    key: "CpOCSUpd1nY7lphH0kgr0xweoNBQ7cGKrFia1cTy",
    url_natural: "https://epic.gsfc.nasa.gov/api/natural",
    url_enhanced: "https://epic.gsfc.nasa.gov/api/enhanced",
    url_mars_pan: "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=PANCAM&api_key=",
    data: null,
    events: null,
    user: null,
    mars: null,
    natural_dates: null,
    enhanced_dates: null,
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
    },
    setNatural(state, payload) {
      state.natural_dates = payload;
    },
    setEnhanced(state, payload) {
      state.enhanced_dates = payload;
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
    },
    getNatural: (state) => {
      return state.natural_dates;
    },
    getEnhanced: (state) => {
      return state.enhanced_dates;
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
      fetch(context.state.url_natural)
        .then(r => r.json())
        .then(data => {
          context.commit("setNatural", data);
        });
      fetch(context.state.url_enhanced)
        .then(r => r.json())
        .then(data => {
          context.commit("setEnhanced", data);
        });
      fetch("https://mars-photos.herokuapp.com/api/v1/rovers/Spirit/photos?sol=2")
        .then(r => r.json())
        .then(data => {
          context.commit("setMarsPan", data.photos);
        });
    },
  }
});
