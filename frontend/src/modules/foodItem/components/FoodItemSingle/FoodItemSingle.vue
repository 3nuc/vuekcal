<template>
  <div>
    <div v-if="foodItem.fetcher.isLoading" data-testid="spinner"></div>
    <div v-else data-testid="container"> {{ foodItem.fetcher.data.value?.calories }} </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSingleFoodItem } from './logic'
export default defineComponent({
  props: {
    id: {type: String, required: true}
  },
  setup(props) {
    const foodItem = useSingleFoodItem();
    foodItem.execute(props.id)
    return {
      foodItem
    }
  }
})
</script>

<style>

</style>
