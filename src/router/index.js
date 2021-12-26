import Vue from "vue";
import VueRouter from "vue-router";
import VueHead from "vue-head";
import Signin from "../views/Signin.vue";
import Mypage from "../views/Mypage.vue";
import Live from "../views/Live.vue";

Vue.use(VueRouter);
Vue.use(VueHead);

const routes = [
  {
    path: "/",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
  },
  {
    path: "/live",
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
