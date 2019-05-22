import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Home from "./views/Home.vue";
import Epic from "./views/E_P.vue";
import Epic_Info from "./views/E_P_I.vue";
import Login from "./views/Login.vue";
import Sign_Up from "./views/Sign_Up.vue";
import Mars_Rover_Info from "./views/M_R_I.vue";
import Forum from "./views/Forum.vue";
import F_S_S from "./views/F_S_S.vue";
import F_M_M from "./views/F_M_M.vue";



Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/e_p",
      name: "epic",
      component: Epic
    },
    {
      path: "/e_i",
      name: "epic_info",
      component: Epic_Info
    },
    {
      path: "/m_r_i",
      name: "mars_rover_info",
      component: Mars_Rover_Info
    },
    {
      path: "/l",
      name: "login",
      component: Login
    },
    {
      path: "/s_u",
      name: "sing up",
      component: Sign_Up
    },
    {
      path: "/forum",
      name: "forum",
      component: Forum
    },
    {
      path: "/f_s_s",
      name: "forum_s_s",
      component: F_S_S
    },
    {
      path: "/f_m_m",
      name: "forum_m_m",
      component: F_M_M
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
