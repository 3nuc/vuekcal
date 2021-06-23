<template>
  <button class="rounded-sm bg-gray-200 p-2 cursor-pointer hover:bg-gray-300 block w-full grid grid-cols-2" @click="emit('click')">
    <span class="font-bold place-self-start" title="Food name">
      <slot name="name"/>
    </span>  
    <span class="place-self-end">
      <slot name="calories"/>
    </span>  
    <span class="place-self-start" title="Manufacturer">
      <slot name="producer"/>
    </span>
    <span class="text-gray-500 place-self-end" title="Calories per 100g">/per 100g</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup(props, {emit}) {

    return {emit}
	},
  emits: ['click']
})
</script>

