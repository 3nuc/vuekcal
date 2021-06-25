<template>
  <input 
    data-testid="input" 
    ref="input" 
    :value="displayValue" 
    @input="onInput($event.target.value)" 
    class="
      border-2
      rounded-md
      border-solid
      border-black
      focus:border-green-200
      h-10
      px-2"
    >
</template>

<script lang="ts">
import {defineComponent, ref, getCurrentInstance, computed, watch} from 'vue'
export default defineComponent({
  props: {
    modelValue: {required: true},
    suffix: {default: '', type: String},
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    //TODO: fix selectionStart (caret) moving over suffix
    const displayValue = computed(() => `${props.modelValue}${props.suffix}`)
    const instance = getCurrentInstance();
    const input = ref<HTMLInputElement>()
    const onInput = (newValue: string) => {
      instance?.proxy?.$forceUpdate();
      emit('update:modelValue', newValue);
    }
    return {
      input,
      displayValue,
      onInput,
    }
  }
})
</script>

<style>

</style>
