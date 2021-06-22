<template>
 <div>
  <input :value="searchboxLogic.searchTerm.value" @input="e=> searchboxLogic.debouncedOnSearchTermChange(e.target.value)">
  <template v-if="!searchboxLogic.isLoading.value" >
    <div v-for="item in searchboxLogic.searchResults.value" :key="item.id">
      {{item.name}} {{item.calories}}
    </div>
  </template>
 </div>
</template>

<script>
import {useSearchbox} from './logic'

export default {
  setup() {
    const searchboxLogic = useSearchbox()
    return {
      searchboxLogic
    }    
  }
}
</script>
