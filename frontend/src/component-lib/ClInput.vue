<template>
  <input 
    data-testid="input" 
    ref="input" 
    :value="displayValue" 
    @input="onInput($event.target.value)" 
    @focus="onClick"
    @click="onClick"
    @keydown="syncCursorPosition()"
    @keydown.backspace="syncCursorPosition()"
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
import _ from 'lodash';
import {defineComponent, ref, getCurrentInstance, computed} from 'vue'
export default defineComponent({
  props: {
    modelValue: {required: true},
    suffix: {default: '', type: String},
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const displayValue = computed(() => `${props.modelValue}${props.suffix}`)
    const instance = getCurrentInstance();
    const input = ref<HTMLInputElement>()
    const onClick = () => {
      syncCursorPosition();
    }
    const onInput = (newValue: string) => {
      instance?.proxy?.$forceUpdate();
      emit('update:modelValue', newValue);
    }
    /*
    * @param {offset} Needed for handling backspace and delete keys
    */
    const syncCursorPosition = (offset: number = 0) => {
      const inputLength = String(props.modelValue).length;
      //input.value!.selectionStart = input.value!.selectionEnd = cursorPosition;
      const newCursorPosition = _.clamp(inputLength + offset,0,Number.MAX_SAFE_INTEGER);
      input.value?.setSelectionRange(newCursorPosition,newCursorPosition);
    }
    return {
      input,
      displayValue,
      onInput,
      syncCursorPosition,
      onClick,
    }
  }
})
</script>

<style>

</style>
