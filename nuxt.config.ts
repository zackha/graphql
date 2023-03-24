export default defineNuxtConfig({
  modules: [
    'nuxt-graphql-client',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rays.terodon.com/graphql'
      }
    }
  }
})
