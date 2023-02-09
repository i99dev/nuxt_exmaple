<template>
  <div>
    <h1>Callback</h1>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const { code } = router.currentRoute.value.query
if (code) {
  const { data,pending, error, refresh } = await useFetch("github",{
    method: "POST",
    body: {
      code: code,
    },
    baseURL:useRuntimeConfig().apiBaseUrl,
  });
  console.log("data", data)
}
</script>
