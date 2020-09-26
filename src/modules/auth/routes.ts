import { RouteRecordRaw } from "vue-router";

import PageLogin from "@/modules/auth/pages/PageLogin.vue";
export const authRoutes: RouteRecordRaw[] = [
  {
    path: "/auth",
    component: PageLogin
  }
];
