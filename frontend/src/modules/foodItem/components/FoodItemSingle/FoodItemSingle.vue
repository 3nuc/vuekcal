<template>
  <div>
    <ClSpinner v-if="isLoading" data-testid="spinner"/>
    <div v-else data-testid="container" class="w-25 grid grid-cols-1 grid-rows-2">
      <div 
        class="
          col-span-2

          grid
          grid-rows-4
          grid-cols-1

          text-left
          bg-gradient-to-r
          from-pink-300
          to-red-199

          pl-5
         "
      >
       <div class="font-bold text-5xl">
        {{ data?.name }}
       </div>
        <div>{{ data?.producer }}</div>
        <div>{{ data?.calories }} kcal/100g</div>
        <div>Serving {{ data?.servingSizeInGrams }}g</div>
      </div>
      <div class="mt-5">
        <ClInputNumber v-model.number="amount" suffix=" g"/> 
        <div class="mt-5 font-bold text-3xl">{{totalKilocalories}} kcal</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import ClSpinner from '../../../../component-lib/ClSpinner.vue';
import ClInputNumber from '../../../../component-lib/ClInputNumber.vue'
import { useSingleFoodItem } from './logic'
export default defineComponent({
  components: { ClSpinner, ClInputNumber },
  props: {
    id: {type: String, required: true}
  },
  setup(props) {
    const {execute, data, isLoading} = useSingleFoodItem();
    const totalKilocalories = computed(() => {
      return amount.value * (data.value.calories/100);
    })
    execute(props.id)
    const amount = ref(100);
    return {
      data,
      isLoading,
      amount,
      totalKilocalories
    }
  }
})
</script>

<style>

</style>
