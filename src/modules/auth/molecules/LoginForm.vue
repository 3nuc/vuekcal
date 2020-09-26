<template>
  <form @submit.prevent="handleLogin()">
    <VkInput v-model:value="username" :placeholder="$t('login')" />
    <VkInput
      v-model:value="password"
      type="password"
      :placeholder="$t('password')"
    />
    <VkButton>hey</VkButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

export const username = ref(null);
export const password = ref(null);
export function handleLogin() {
  //login here
  console.log("hello");
}
</script>
