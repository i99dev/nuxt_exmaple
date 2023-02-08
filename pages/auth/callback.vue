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
  console.log(code)
  const { data,pending, error, refresh } = await useFetch("http://localhost:3010/github",{
    method: "POST",
    body: JSON.stringify({ code }),
  });
  if (data) {
    console.log(data)
  }
}
</script>