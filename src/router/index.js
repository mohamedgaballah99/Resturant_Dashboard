import { createRouter, createWebHistory } from "vue-router";
import home from "@/components/home.vue";
import SignUp from "@/components/SignUp.vue";
import login from '@/components/login';
import add from '@/components/add';
import update from '@/components/update';
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: login,
  },
  {
    path: "/add",
    name: "Add",
    component: add,
  },
  {
    path: "/update/:id",
    name: "Update",
    component: update,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
