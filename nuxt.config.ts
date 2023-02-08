// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  tailwindcss: {
    configPath: "tailwind.config",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
});
