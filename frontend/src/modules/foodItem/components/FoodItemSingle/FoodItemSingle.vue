<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import ClSpinner from '../../../../component-lib/ClSpinner.vue';
import ClInputNumber from '../../../../component-lib/ClInputNumber.vue'
import { useSingleFoodItem } from './logic'
import CalorieCalculator from './CalorieCalculator.vue';
export default defineComponent({
  components: { ClSpinner, ClInputNumber, CalorieCalculator },
  props: {
    id: {type: String, required: true}
  },
  setup(props) {
    const {execute, data, isLoading} = useSingleFoodItem();
    execute(props.id)
    const amountInGrams = ref<number>(100)
    return {
      data,
      amountInGrams,
      isLoading,
    }
  }
})
</script>
<template>
  <div>
    <ClSpinner v-if="isLoading" data-testid="spinner"/>
    <CalorieCalculator v-else :amountInGrams="amountInGrams" @update:amountInGrams="amountInGrams = $event" :data="data"/>
  </div>
</template>

