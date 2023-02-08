# provider Login 🚧

We will use Github as an example to implement the provider login.

## 1. ngrok setup

We will use ngrok to create a tunnel to our local server. and we can use the tunnel to test the provider login.

```bash
$ ngrok http 3000
```

## 2. Github setup

### 2.1. Github OAuth App

We need to create a Github OAuth App to get the `client_id` and `client_secret`.

### 2.2. Github OAuth App Callback URL

We need to set the callback URL to the ngrok tunnel URL.

## 3. Nuxt3 setup

### 3.1. Nuxt3 config

We need to set the `client_id` and `client_secret` in the `nuxt.config.js` file.

```js
export default defineNuxtConfig({
  // ...
  publicRuntimeConfig: {
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  // ...
})
```

### 3.2. Nuxt3 env

We need to set the `client_id` and `client_secret` in the `.env` file.

```bash
GITHUB_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3.3. Nuxt3 Page

We need to create a page to handle the provider login callback.

```bash
$ touch pages/auth/callback.vue
```

```vue
<template>
  <div>
    <h1>Callback</h1>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const { code } = router.currentRoute.value.query

console.log(code)
</script>
```

when user press the provider login button, the Github OAuth App will redirect to the callback URL. and we can get the `code` from the URL query.

