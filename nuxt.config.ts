// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public:{
      apiBaseUrl: process.env?.API_BASE_URL as string,
      GITHUB_CLIENT_ID: process.env?.GITHUB_CLIENT_ID as string,
      GITHUB_redirect_url: process.env?.GITHUB_redirect_url as string,
    }
  },
  tailwindcss: {
    configPath: "tailwind.config",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
});
