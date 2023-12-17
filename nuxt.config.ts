// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss',  '@nuxt/image'],
  css:[
    "@/assets/tailwind.css",
    "@/assets/font.css",
    "@/assets/scrollbar.css",
     "@/assets/scss/navbar.scss"
  
  ]
})
