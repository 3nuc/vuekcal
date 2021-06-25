<template>
  <div class="m-32">
    <ClInput class="w-full" :modelValue="searchTerm" @input="e=> onSearchTermChange(e.target.value)" />
    <ClSpinner class="mx-auto mt-2" v-if="isLoading"/>
    <template v-else>
      <FoodItem v-for="item in searchResults" :key="item.id" @click="onItemClick(item.id)">
        <template #name>{{item.name}}</template>
        <template #calories> {{item.calories}} kcal</template>
        <template #producer> {{item.producer}}</template>
      </FoodItem>
    </template>
  </div>
</template>

<script lang="ts">
import ClInput from '../../../../component-lib/ClInput.vue'
import ClSpinner from '../../../../component-lib/ClSpinner.vue'
import FoodItem from '../FoodItem.vue'
import {useSearchbox} from './logic'
import {useRouter} from 'vue-router'

export default {
  components: { ClInput, FoodItem, ClSpinner },
  setup() {
    const router = useRouter()
    const onItemClick = (id: string) => {
      router.push({name: 'SingleFoodItem', params: {id}})
    }
    const { searchResults, searchTerm, isLoading, onSearchTermChange } = useSearchbox()
    return {
      searchResults,
      searchTerm,
      onSearchTermChange,
      isLoading,
      onItemClick
    }    
  }
}
</script>
