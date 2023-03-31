export default defineNuxtConfig({
  modules: [
    'nuxt-graphql-client',
    '@nuxtjs/apollo',
    'nuxt-icon'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rays.terodon.com/graphql'
      }
    }
  }
})
