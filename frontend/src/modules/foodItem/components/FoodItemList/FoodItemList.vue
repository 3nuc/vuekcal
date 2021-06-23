<template>
  <div class="m-32">
    <ClInput class="w-full" :value="searchboxLogic.searchTerm.value" @input="e=> searchboxLogic.debouncedOnSearchTermChange(e.target.value)" />
    <ClSpinner class="mx-auto mt-2" v-if="searchboxLogic.isLoading.value"/>
    <template v-else>
      <FoodItem v-for="item in searchboxLogic.searchResults.value" :key="item.id">
        <template #name>{{item.name}}</template>
        <template #calories> {{item.calories}} kcal</template>
        <template #producer> {{item.producer}}</template>
      </FoodItem>
    </template>
  </div>
</template>

<script>
import ClInput from '../../component-lib/ClInput.vue'
import ClSpinner from '../../component-lib/ClSpinner.vue'
import FoodItem from '../FoodItem.vue'
import {useSearchbox} from './logic'

export default {
  components: { ClInput, FoodItem, ClSpinner },
  setup() {
    const searchboxLogic = useSearchbox()
    return {
      searchboxLogic
    }    
  }
}
</script>
