module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-nuxt-news-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    'tachyons/css/tachyons.min.css',
    'tachyons-debug/css/tachyons-debug.min.css',
    '~/assets/main.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios']
    /*
    ** Run ESLint on save
    */
//    extend (config, ctx) {
//      if (ctx.dev && ctx.isClient) {
//        config.module.rules.push({
//          enforce: 'pre',
//          test: /\.(js|vue)$/,
//          loader: 'eslint-loader',
//          exclude: /(node_modules)/
//        })
  },
  plugins: [
    '~/plugins/filters.js'
  ]
}
