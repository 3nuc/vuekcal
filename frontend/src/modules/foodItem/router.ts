import { RouteRecordRaw, RouterView } from "vue-router";
import FoodItemList from './components/FoodItemList/FoodItemList.vue'

export const routes : RouteRecordRaw[] = [
  {
    path: '/fooditemlist',
    component: RouterView,
    children: [
      {path: '', component: FoodItemList},
      {path: ':id', component: FoodItemList}
    ]
  }
]
