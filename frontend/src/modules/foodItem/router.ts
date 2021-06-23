import { RouteRecordRaw, RouterView } from "vue-router";
import FoodItemList from './components/FoodItemList/FoodItemList.vue'
import FoodItemSingle from './components/FoodItemSingle/FoodItemSingle.vue'


export const routes : RouteRecordRaw[] = [
  {
    path: '/fooditemlist',
    name: 'FoodItemList',
    component: RouterView,
    children: [
      {path: '', component: FoodItemList},
      {path: ':id', name: 'SingleFoodItem', component: FoodItemSingle, props: true}
    ]
  }
]
