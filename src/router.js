//1c
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/blah",
      name: "blah",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Blah.vue")
    },
    {
      path: "/Forms",
      name: "forms",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Forms.vue")
    },
    {
      path: "/Speech",
      name: "speech",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Speech.vue")
    },
    {
      path: "/FormsVuex",
      name: "formsVuex",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/FormsVuex.vue")
    },
    {
      path: "/testing",
      name: "testing",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Testing.vue")
    },
  ]
});
