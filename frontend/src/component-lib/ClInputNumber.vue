<template>
  <ClInput ref="input" :modelValue="modelValue" @input="handleInput($event.target.value)" />
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import ClInput from './ClInput.vue'

export default defineComponent({
  components: { ClInput },
  emits: ['update:modelValue'],
  props: {
    modelValue: { type: Number }
  },
	setup(props, {emit}) {
    const input = ref<HTMLInputElement>();
	  const handleInput = (newValue: string) => {
      const numbersOnly = newValue.replace(/\D/g, '');
      emit('update:modelValue', numbersOnly) 
    }	
    return {
      handleInput,
      input
    }
	},
})
</script>

