export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image", '@pinia/nuxt'],

  css: [],

  plugins: [
    '~/plugins/useToaster.client.ts',
    '~/plugins/api.ts',
  ],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || "http://127.0.0.1:8000/api",

    },
  },

  image: {
    presets: {
      default: {
        modifiers: {
          format: "webp",
          loading: "lazy",
          quality: "100",
        },
      },
    },
  },
  ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },

  compatibilityDate: "2024-07-10",
});