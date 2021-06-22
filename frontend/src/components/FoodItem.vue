<template>
  <button class="rounded-sm bg-gray-200 p-2 cursor-pointer hover:bg-gray-100 block w-full">
    <div class="flex justify-between">
      <span class="font-bold" title="Food name">
        <slot name="name"/>
      </span>  
      <span>
        <slot name="calories"/>
      </span>  
    </div>
    <div class="flex justify-between">
      <span title="Manufacturer">
        <slot name="producer"/>
      </span>
      <span class="text-gray-500" title="Calories per 100g">/per 100g</span>
    </div>
  </button>
</template>

