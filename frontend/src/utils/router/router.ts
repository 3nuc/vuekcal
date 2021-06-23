import VueRouter from 'vue-router'
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    ...foodItemRoutes, 
  ]
})
