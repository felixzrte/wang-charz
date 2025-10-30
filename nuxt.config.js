//import redirectSSL from 'redirect-ssl';

const colors = require('vuetify/es5/util/colors').default;
const axios = require('axios');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: '%s',
    title: 'Doctors of Doom' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'Wrath and Glory,Wrath & Glory,W&G,Homebrew,40k,Warhammer,Roleplaying Game' },
      { hid: 'theme-color', name: 'theme-color', content: '#4caf50' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: '5Eig5Vs_1-k3HAZdkGwTDu4Tu94AM9H-xny9n80IgJ0' },

      /**
       *  Open Graph, used in facebook
       */
      { hid: 'og:site_name', name: 'og:site_name', content: 'Doctors of Doom' },
      { hid: 'og:image', name: 'og:image', content: 'https://www.doctors-of-doom.com/website_logo.png' },

      /**
       * Twitter Card, used in Twitter, Discord
       * @see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image
       * @see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary
       */
      { hid: 'twitter:site', name: 'twitter:site', content: '@doctors_of_doom' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@doctors_of_doom' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      {
        rel: 'shortcut icon', type: 'image/x-icon', sizes: '192x192', href: '/android-chrome-192x192.png'
      },
      {
        rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32.png'
      },
      {
        rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'stylesheet', href: '/css/materialdesignicons.min.css' },
      {
        rel: 'preload',
        href: '/fonts/Material-Icons.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'crossorigin',
      },
      {
        rel: 'preload',
        href: '/fonts/Roboto-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'crossorigin',
      },
      {
        rel: 'preload',
        href: '/fonts/Roboto-Bold.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'crossorigin',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: colors.green.base },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/config/_fonts.scss',
    '@/assets/css/catppuccin-mocha.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/vue-croppa.js', ssr: false },
    '~/plugins/filters.js',
    '~/plugins/hint-box-component.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/vuetify', {
      /* @see https://github.com/nuxt-community/vuetify-module#defaultassets */
      defaultAssets: false,
    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    ['@nuxtjs/redirect-module', [
      /* @see https://github.com/nuxt-community/redirect-module */
      { from: '^/builder.*', to: '/forge/my-characters', statusCode: 301 },
    ]],
    ['@nuxtjs/pwa', {
      manifest: false,
    }],
  ],

  /*
   * Sitemap module configuration
   */
  sitemap: {
    hostname: 'https://www.doctors-of-doom.com',
    gzip: true,
    exclude: [
      // dynamic and user specific parts should not be sitemaped
      '/about',
      '/forge/characters/**',
    ],
    routes: async () => {
      const base = process.env.NODE_ENV === 'production' ? 'https://www.doctors-of-doom.com' : 'http://localhost:3000';

      const threatResponse = await axios.get(`${base}/api/threats/`);
      const threatRoutes = threatResponse.data
      .filter((item) => item.source.key !== 'core')
      .map((item) => {
        const slug = item.key.replace(/([a-z][A-Z])/g, (g) => `${g[0]}-${g[1].toLowerCase()}`);
        return `/bestiary/${slug}`;
      });

      return [
        ...threatRoutes,
      ];
    },
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    browserBaseURL: '/',
  },

  /* auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'api/users/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: 'api/users/me', mthod: 'get', propertyName: 'data'},
        },
        // tokenRequired: true,
        // tokenType: 'Bearer'
      },
    },
    plugins: [
      '~/plugins/auth.js'
    ]
  }, */

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          // Catppuccin Mocha color palette (dark theme)
          primary: '#89b4fa',      // Blue - used for primary actions
          secondary: '#cba6f7',    // Mauve - used for secondary actions
          accent: '#f5c2e7',       // Pink - used for highlights
          error: '#f38ba8',        // Red - used for errors
          warning: '#fab387',      // Peach - used for warnings
          info: '#94e2d5',         // Teal - used for info
          success: '#a6e3a1',      // Green - used for success (better contrast)
          background: '#1e1e2e',   // Base - main background
          surface: '#313244',      // Surface0 - cards, dialogs
          'surface-variant': '#45475a', // Surface1 - slightly elevated
          'on-surface': '#cdd6f4', // Text - main text color
          'on-background': '#cdd6f4', // Text - text on background
        },
        light: {
          // Catppuccin Latte color palette (light theme)
          primary: '#1e66f5',      // Blue - used for primary actions
          secondary: '#8839ef',    // Mauve - used for secondary actions
          accent: '#ea76cb',       // Pink - used for highlights
          error: '#d20f39',        // Red - used for errors
          warning: '#fe640b',      // Peach - used for warnings
          info: '#179299',         // Teal - used for info
          success: '#40a02b',      // Green - used for success
          background: '#eff1f5',   // Base - main background
          surface: '#e6e9ef',      // Surface0 - cards, dialogs
          'surface-variant': '#ccd0da', // Surface1 - slightly elevated
          'on-surface': '#4c4f69', // Text - main text color
          'on-background': '#4c4f69', // Text - text on background
        },
      },
    },
  },

  serverMiddleware: [
    //'redirect-ssl',
    //redirectSSL.create({enabled: process.env.NODE_ENV === 'production'}),
    '~/api/express', // handles /api/** calls
    // '~/serverMiddleware/forcedomain'
  ],

  /**
   * Build configuration
   */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      config.node = {
        fs: 'empty'
      };

      // Include the compiler version of Vue so that wp-content works
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js"

    },
  },
};
