import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    strategies: "injectManifest",
    srcDir: "src",
    filename: "sw.js",
    includeAssets: ['favicon.ico','apple-touch-icon.png', 'masked-ico.png'],
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,jpg,json,svg}'],
      maximumFileSizeToCacheInBytes: 10*1024 * 1204
    },
    manifest:{
      name: "Asistente virtual",
      short_name: "BBVA IA",
      description: "Asistente Virtual de BBVA. ¿Necesitas información sobre cuentas, tarjetas de crédito, fondos, ETFs o perfiles de inversión? ¡Ven y pregúntale al asistente virtual!",
      theme_color: '#14549c',
      start_url: "/",
      display: "standalone",
      orientation: "portrait",
      lang: "es",
      categories: [
        "website",
        "proyectos",
        "BBVA",
        "IA"
      ],
      icons: [
        {
          src: "images/pwa/homescreen48.png",
          sizes: "48x48",
          type: "image/png"
        },
        {
          src: "images/pwa/homescreen72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "images/pwa/homescreen96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "images/pwa/homescreen144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "images/pwa/homescreen168.png",
          sizes: "168x168",
          type: "image/png"
        },
        {
          src: "images/pwa/homescreen192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "images/pwa/homescree256.png",
          sizes: "256x256",
          type: "image/png"
        }
      ],
      screenshots: [
        {
          src: "images/screenshots/mobile1.jpg",
          type: "image/jpeg",
          sizes: "370x820",
          form_factor: "narrow"
        },
        {
          src: "images/screenshots/mobile2.jpg",
          type: "image/jpeg",
          sizes: "370x820",
          form_factor: "narrow"
        },
        {
          src: "images/screenshots/mobile3.jpg",
          type: "image/jpeg",
          sizes: "370x820",
          form_factor: "narrow"
        },
        {
          src: "images/screenshots/mobile4.jpg",
          type: "image/jpeg",
          sizes: "370x820",
          form_factor: "narrow"
        }
      ]
    }
  })],
})
