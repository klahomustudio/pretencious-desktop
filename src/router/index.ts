import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";

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
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import( "../views/dashboard.vue"),
  },
  {
    path: "/todo",
    name: "TODO",
    component: () =>
      import( "../views/todo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
