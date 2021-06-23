import {createRouter, createWebHistory} from 'vue-router'
import { routes as foodItemRoutes } from '../../modules/foodItem/router'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...foodItemRoutes
  ]
})
