import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import LeadPage from "../pages/LeadPage.vue";
import AdminPage from "../pages/AdminPage.vue";
import EmployeePage from "../pages/EmployeePage.vue";

const routes = [
  { path: "/", component: LoginPage },
  { path: "/administrator", component: AdminPage },
  { path: "/lead", component: LeadPage },
  { path: "/employee", component: EmployeePage },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
