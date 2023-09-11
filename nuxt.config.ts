// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static", // Ustawienie target na 'static'
  ssr: false, // Wyłączenie server-side rendering (SSR)
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
  ],

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "dracula",
      preload: ["ts", "js", "css", "java", "json", "bash", "vue"],
    },
  },

  generate: {
    fallback: true,
  },
});
