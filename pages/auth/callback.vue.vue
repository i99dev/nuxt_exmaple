<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const { code } = router.currentRoute.value.query

console.log(code)
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
