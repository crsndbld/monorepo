import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo"],

  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:3000/graphql",
      },
    },
  },
});
