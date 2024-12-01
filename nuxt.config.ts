// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/globals.css', // Path to the global styles
  ],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],
  googleFonts: {
    families: {
      Montserrat: true
    }
  },
  ssr: false, // Optional: For fully client-side apps (remove if server-side rendering is needed)
  nitro: {
    preset: 'static', // Use Nitro's static preset for optimized static generation
  },
})