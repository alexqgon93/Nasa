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
    url_mars: "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1&page=1&camera=PANCAM&api_key=",
    data: null,
    events: null,
    user: null,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setEvents(state, payload) {
      state.events = payload;
    },
    setUser(state, payload) {
      state.user = payload.user;
    },
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
    },
  }
});
