<template>
  <div>
    <ClSpinner v-if="isLoading" data-testid="spinner"/>
    <div v-else data-testid="container" class="w-50">
      <div class="font-bold">{{ data?.name }}</div>
      <div>{{ data?.producer }}</div>
      <div>{{ data?.calories }} kcal</div>
      <div>{{ data?.servingSizeInGrams }}g/serving</div>
      <ClInputNumber v-model.number="amount" /> g
      {{ amount * data?.calories }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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
    execute(props.id)
    const amount = ref();
    return {
      data,
      isLoading,
      amount
    }
  }
})
</script>

<style>

</style>
