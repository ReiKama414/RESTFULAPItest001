// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      baseURL: '/RESTFULAPItest001/',
      head: {
        title: 'RESTFULAPI test 001 | Kama',
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1',
        meta: [
          { name: 'description', content: 'RESTFULAPI Test Project.' },
          { property: 'og:title', content: 'RESTFULAPI test 001 | Kama' },
          { property: 'og:description', content: 'RESTFULAPI Test Project.' },
          { property: 'og:locale', content: 'zh-tw' }
        ],
      },
    },
})
