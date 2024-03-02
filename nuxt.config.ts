// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
  },
  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      meta: [
        { name: "robots", content: "index, follow" },
        {
          property: "og:title",
          content: "Bedir Zana Demir",
        },
        {
          property: "og:description",
          content:
            "Çocukluğumdan beri teknolojiye ve yazılıma meraklıyım. Frontend developer olarak kullanıcı deneyimini gözeten web uygulamaları tasarlıyor ve geliştiriyorum. Yeni teknolojileri keşfetmeyi, öğrenmeyi ve ürün geliştirmeyi seviyorum. Bunların haricindeki kişisel zamanlarımda kitap okumayı, fotoğraf çekmeyi ve bir ziraat mühendisi adayı olarak doğada olmayı seviyorum.",
        },
        { property: "og:url", content: "https://bedirdemir.com/" },
        {
          property: "og:site_name",
          content: "Bedir Zana Demir",
        },
        {
          property: "og:type",
          content: "website",
        },
        { property: "og:locale", content: "tr_TR" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@bedirzd" },
        { name: "twitter:title", content: "Bedir Zana Demir" },
        {
          name: "twitter:description",
          content:
            "Çocukluğumdan beri teknoloji ve yazılıma meraklıyım. Frontend developer olarak kullanıcı deneyimini gözeten web uygulamaları tasarlıyor ve geliştiriyorum. Yeni teknolojileri keşfetmeyi, öğrenmeyi ve ürün geliştirmeyi seviyorum. Bunların haricindeki kişisel zamanlarımda kitap okumayı, fotoğraf çekmeyi ve bir ziraat mühendisi adayı olarak doğada olmayı seviyorum.",
        },
      ],
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/post": { isr: 100000 },
    "/post/**": { isr: 100000 },
    "/book-notes": { isr: 100000 },
    "/book-notes/**": { isr: 100000 },
    "/photos": { isr: 100000 },
  },
});
