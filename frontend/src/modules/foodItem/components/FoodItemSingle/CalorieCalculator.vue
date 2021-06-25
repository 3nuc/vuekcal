<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import ClSpinner from '../../../../component-lib/ClSpinner.vue';
import ClInputNumber from '../../../../component-lib/ClInputNumber.vue'
import { MyFoodItem } from '../../../../../mocks/browser';

export default defineComponent({
  components: { ClSpinner, ClInputNumber },
  props: {
    data: {type: Object as PropType<MyFoodItem>, required: true},
    amountInGrams: {type: Number, default: 100}
  },
  emits: ['update:amountInGrams'],
  setup(props) {
    const totalKilocalories = computed(() => {
      return props.amountInGrams* (props.data.calories/100);
    })
    return {
      totalKilocalories
    }
  }
})
</script>

<template>
    <div data-testid="container" class="w-25 grid grid-cols-1 grid-rows-2">
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
        <div class="mt-5 flex align-center">
          <div class="w-40">
            <ClInputNumber :model-value="amountInGrams" @update:modelValue="$emit('update:amountInGrams', Number($event))" suffix=" g" class="w-full" /> 
          </div>
          <div class="ml-2 font-bold text-3xl" data-testid="total-calories">= {{totalKilocalories}} kcal</div>
          <button>OK</button>
        </div>
      </div>
    </div>
</template>
