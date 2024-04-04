import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import LeadPage from "../pages/LeadPage.vue";
import AdminPage from "../pages/AdminPage.vue";
import EmployeePage from "../pages/UserPage.vue";
import Mechanics from "../pages/MechanicPage.vue";
import LeadLandingPage from "../pages/LeadLandingPage.vue";
const routes = [
  { path: "/", component: LoginPage },
  { path: "/administrator", component: AdminPage },
  { path: "/lead", component: LeadPage },
  { path: "/user", component: EmployeePage },
  { path: "/mechanincs", component: Mechanics },
  { path: "/landing", component: LeadLandingPage },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
