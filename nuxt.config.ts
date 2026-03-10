// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "app/",
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-gtag",
    "nuxt-studio",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-reading-time": {},
        },
      },
    },
  },
  studio: {
    route: "/_studio",
    repository: {
      provider: "github",
      owner: "bedirdemir",
      repo: "bedirdemir.com",
      branch: "master",
    },
  },

  gtag: {
    enabled: process.env.NODE_ENV === "production",
    id: "G-ZLPR3ETG4R",
  },

  colorMode: {
    classSuffix: "",
    preference: "light",
  },

  image: {
    format: ["avif", "webp"],
    quality: 75,
    domains: ["images.unsplash.com"],
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
            "Çocukluğumdan beri teknolojiye ve yazılıma meraklıyım. Frontend Developer ve Data Analyst olarak, kullanıcı deneyimini gözeten web uygulamaları tasarlıyor ve geliştiriyorum; verileri analiz ederek anlamlı sonuçlar üretiyor ve bu sonuçları ürün geliştirme süreçlerine entegre ediyorum. Yeni teknolojileri keşfetmeyi, öğrenmeyi ve ürün geliştirmeyi seviyorum. Bunların haricindeki kişisel zamanlarımda kitap okumayı, fotoğraf çekmeyi ve bir Ziraat Mühendisi olarak doğada olmayı seviyorum.",
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
            "Çocukluğumdan beri teknolojiye ve yazılıma meraklıyım. Frontend Developer ve Data Analyst olarak, kullanıcı deneyimini gözeten web uygulamaları tasarlıyor ve geliştiriyorum; verileri analiz ederek anlamlı sonuçlar üretiyor ve bu sonuçları ürün geliştirme süreçlerine entegre ediyorum. Yeni teknolojileri keşfetmeyi, öğrenmeyi ve ürün geliştirmeyi seviyorum. Bunların haricindeki kişisel zamanlarımda kitap okumayı, fotoğraf çekmeyi ve bir Ziraat Mühendisi olarak doğada olmayı seviyorum.",
        },
      ],
    },
  },
  routeRules: {
    "/": {
      prerender: true,
    },
    "/writing": {
      prerender: true,
      swr: 3600,
    },
    "/writing/**": {
      swr: 3600,
    },
    "/photos": {
      swr: 3600,
    },
    "/api/photos": {
      swr: 3600,
    },
  },
  compatibilityDate: "2026-03-10",
});
