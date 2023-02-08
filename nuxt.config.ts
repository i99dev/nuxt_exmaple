// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
  },
  tailwindcss: {
    configPath: "tailwind.config",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
});
