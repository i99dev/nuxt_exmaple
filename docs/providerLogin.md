# provider Login 🚧 under construction 🚧

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

### 3.1. Nuxt3 env

We need to set the `client_id` and `client_secret` in the `.env` file.

```bash
GITHUB_CLIENT_ID=xxxxxxxxxxxxxxxxxxxx
GITHUB_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
we will use this env with our MockApi to get the access token but on real you will add this step to your backend.

### 3.2. Nuxt3 MockApi

We need to create a MockApi to get the access token.

- crete new route file on @api folder `github.js`

```js
const express = require("express");
const router = express.Router();

router.post("/github", async (req, res) => {
  const { code } = req.body;
  if (code) {
    const { access_token, token_type, scope } = await fetch(
      "https://github.com/login/oauth/access_token" +
        new URLSearchParams({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      {
        method: "POST",
      }
    );
    res.status(200).json({
      access_token,
      token_type,
      scope,
    });
  } else {
    res.status(400).json({
      error: "code is required",
    });
  }
});

module.exports = router;

```
more info about the Github OAuth App [here](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)

Don't forget to add the github route to the `index.js` file.

```js
const express = require("express");
const userRoutes = require("./user");
const githubRoutes = require("./github");

const app = express();
const port = 3010;
app.use("/user", userRoutes);
app.use("/github", githubRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```


### 3.2. Nuxt3 Page

We need to create a page to handle the provider login callback.

```bash
$ npx nuxt add page "auth/callback.vue"
```

```html
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
  const { data,pending, error, refresh } = await useFetch("http://localhost:3010/github",{
    method: "POST",
    body: JSON.stringify({ code }),
  });
  if (data) {
    console.log(data)
  }
</script>
```

when user press the provider login button, the Github OAuth App will redirect to the callback URL. and we can get the `code` from the URL query.

When you try visit page and add after path query `?code=123456` you will get the access token.
 
 ![image](./assets/imgs/auth_code.png)

 acutally The code will get when the user press the provider login button and redirect to the callback URL.

 but here for test and show you thats wee are do manually.