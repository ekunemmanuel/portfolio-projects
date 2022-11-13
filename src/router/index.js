import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalculatorView from "../views/CalculatorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "IP Address Tracker",
      },
    },
    {
      path: "/calculator",
      name: "calculator",
      component: CalculatorView,
      meta: {
        title: "Calculator",
      },
    },
    {
      path: "/grid",
      name: "gridlayout",
      component: () => import("@/views/GridView.vue"),
      meta: {
        title: "Grid",
      },
    },
    {
      path: "/room",
      name: "room-homepage",
      component: () => import("@/views/RoomView.vue"),
      meta: {
        title: "Room",
      },
    },
    {
      path: "/advice",
      name: "advice",
      component: () => import("@/views/AdviceApp.vue"),
      meta: {
        title: "Advice App",
      },
    },
    {
      path: "/gridprice",
      name: "gridprice",
      component: () => import("@/views/GridPrice.vue"),
      meta: {
        title: "Small Grid Price",
      },
    },
    {
      path: "/connectify",
      name: "connectify",
      component: () => import("@/views/Connectify.vue"),
      meta: {
        title: "Connectify",
      },
    },
    {
      path: "/fintory",
      name: "fintory",
      component: () => import("@/views/Fintory.vue"),
      meta: {
        title: "Fintory",
      },
    },
    {
      path: "/sidebar",
      name: "sidebar",
      component: () => import("@/views/Sidebar.vue"),
      meta: {
        title: "Sidebar",
      },
    },
    {
      path: "/form",
      name: "form",
      component: () => import("@/views/Form.vue"),
      meta: {
        title: "Form",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "Not Found",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
