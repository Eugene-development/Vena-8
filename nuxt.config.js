require('dotenv').config();

export default {
  server: {
    port: 3050, // default: 3000
    // host: '0.0.0.0' // default: localhost
  },

  mode: 'universal',





  // publicRuntimeConfig: {
  //   baseURL: process.env.BASE_URL || 'http://23.111.204.148:7788/'
  // },

  // env: {
  //   baseUrl: 'http://23.111.204.148:7788/'
  // },

  // env: {
  //   baseUrl:
  //     process.env.NODE_ENV === 'dev'
  //       ? 'http://localhost:3000'
  //       : 'https://my-domain.com'
  // },
  //
  // router: {
  //   middleware: 'access',
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/auth',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: 'http://127.0.0.1:8000/api/login', method: 'post', propertyName: 'meta.token'
  //         },
  //         user: {
  //           url: 'http://127.0.0.1:8000/api/me', method: 'get', propertyName: 'data'
  //         },
  //         logout: {
  //           url: 'http://127.0.0.1:8000/api/logout', method: 'post'
  //         }
  //       }
  //     }
  //   },
  //   // redirect: {
  //   //   login: '/auth/signin',
  //   //   home: '/'
  //   // }
  // },




  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'http://23.111.204.148:8888/api/login', method: 'post', propertyName: 'meta.token'
          },
          user: {
            url: 'http://23.111.204.148:8888/api/me', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'http://23.111.204.148:8888/api/logout', method: 'post'
          }
        }
      }
    },
  //
  //
  //
  //
  //
  //
  //
  //
  //   // redirect: {
  //   //   login: '/auth/signin',
  //   //   home: '/'
  //   // }
  },



}
