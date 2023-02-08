<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">Dashboard</h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>
