import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Brazel from "../components/Brazel";
import Jamaica from "../components/Jamaica";
import Hawaii from "../components/Hawaii";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazel
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: Jamaica
  },
  {
    path: "/Hawaii",
    name: "Hawaii",
    component: Hawaii
  },

];

const router = new VueRouter({
  routes
});

export default router;
