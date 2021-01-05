import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/main/main")
  },
  {
    path: "/about",
    name: "About",
    component: () =>import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
