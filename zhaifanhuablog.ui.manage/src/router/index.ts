import { createRouter,createWebHistory } from "vue-router";
import LoginPage from "../view/index/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: LoginPage }
  ],
});

export default router;
