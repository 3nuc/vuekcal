<template>
  <input ref="input" :value="modelValue" @input="onInput($event.target.value)" class="border-2 rounded-sm border-solid border-black focus:border-green-200 h-10 px-2">  
</template>

<script lang="ts">
import {defineComponent, ref, watch, getCurrentInstance} from 'vue'
export default defineComponent({
  props: {
    modelValue: {required: true}
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const instance = getCurrentInstance();
    const input = ref<HTMLInputElement>()
    const onInput = (newValue: string) => {
      instance?.proxy?.$forceUpdate();
      emit('update:modelValue', newValue);
    }
    return {
      input,
      onInput
    }
  }
})
</script>

<style>

</style>
