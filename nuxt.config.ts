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
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-ZLPR3ETG4R",
          async: "true",
        },
        {
          children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZLPR3ETG4R');
        `,
        },
      ],
    },
  },
  routeRules: {
    "/": { prerender: true },
    "/post": { swr: 60 * 60 * 48 },
    "/post/**": { isr: 60 * 60 * 72 },
    "/book-notes": { swr: 60 * 60 * 48 },
    "/book-notes/**": { isr: 60 * 60 * 72 },
    "/photos": { isr: 60 * 60 * 48 },
    "/api/photos": { swr: 60 * 60 * 48 },
  },
});
