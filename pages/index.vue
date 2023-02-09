<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">Home</h1>
    <button
      @click="login"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Login
    </button>
  </div>
</template>

<script lang="ts" setup>
const env = useRuntimeConfig()
const login = () => {
  window.location.href = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${env.GITHUB_redirect_url}&scope=read:user`;
};
</script>
