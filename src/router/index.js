import Vue from "vue";
import VueRouter from "vue-router";
import VueHead from "vue-head";
import Login from "../views/Login.vue";
import Mypage from "../views/Mypage.vue";
import Live from "../views/Live.vue";

Vue.use(VueRouter);
Vue.use(VueHead);

const route = "/ecc/msatou/raict_login/";
// /ecc/msatou/raict_login/

const routes = [
  {
    path: `${route}`,
    name: "Login",
    component: Login,
  },
  {
    path: `${route}mypage`,
    name: "Mypage",
    component: Mypage,
  },
  {
    path: `${route}live`,
    name: "Live",
    component: Live,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
