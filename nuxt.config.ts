// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  ssr: false,

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
  ],

  content: {
    highlight: {
      theme: "dracula",
      preload: ["ts", "js", "css", "java", "json", "bash", "vue"],
    },
  },

  generate: {
    fallback: true,
    routes: ["/blog/AI-jako-wsparcie-juniorów"],
  },
});
