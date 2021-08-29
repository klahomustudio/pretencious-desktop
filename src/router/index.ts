import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import( "../views/dashboard.vue"),
  },
  {
    path: "/controlpanel",
    name: "ControlPanel",
    component: () =>
      import( "../views/controlPanel.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import( "../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
