<template>
  <div
    class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 pt-2 lg:pt-4"
  >
    <img
      class="size-48 lg:size-52 lg:mt-3 rounded-full"
      src="/img/my.webp"
      alt="Bedir Zana Demir"
    />
    <div class="text-center lg:text-left">
      <h2 class="text-2xl mb-3 font-medium">Merhaba 👋</h2>
      <p class="leading-[1.85rem] font-light text-lg mb-7">
        Çocukluğumdan beri teknolojiye ve yazılıma meraklıyım. Frontend
        developer olarak kullanıcı deneyimini gözeten web uygulamaları
        tasarlıyor ve geliştiriyorum. Yeni teknolojileri keşfetmeyi, öğrenmeyi
        ve ürün geliştirmeyi seviyorum. Bunların haricindeki kişisel
        zamanlarımda kitap okumayı, fotoğraf çekmeyi ve bir ziraat mühendisi
        adayı olarak doğada olmayı seviyorum.
      </p>
      <!-- social links  -->
      <div class="flex flex-wrap gap-3 justify-center lg:justify-normal">
        <nuxt-link
          class="inline-flex items-center gap-2 shadow-sm bg-[#18181B] text-white py-2 px-3 rounded-lg font-medium hover:opacity-85 active:scale-95 transition-opacity dark:bg-[#f4f4f5] dark:text-gray-900"
          to="mailto:bedir@proton.me"
          target="_blank"
          ><svg
            class="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
            /></svg
          >Email</nuxt-link
        >
        <nuxt-link
          class="inline-flex items-center gap-2 shadow-sm bg-[#18181B] text-white py-2 px-3 rounded-lg font-medium hover:opacity-85 active:scale-95 transition-opacity dark:bg-[#f4f4f5] dark:text-gray-900"
          to="https://github.com/bedirdemir"
          target="_blank"
          ><svg
            class="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            /></svg
          >GitHub</nuxt-link
        >
        <nuxt-link
          class="inline-flex items-center gap-2 shadow-sm bg-[#18181B] text-white py-2 px-3 rounded-lg font-medium hover:opacity-85 active:scale-95 transition-opacity dark:bg-[#f4f4f5] dark:text-gray-900"
          to="https://twitter.com/bedirzd"
          target="_blank"
          ><svg
            class="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16Z"
              />
            </g></svg
          >Twitter</nuxt-link
        >
        <nuxt-link
          class="inline-flex items-center gap-2 shadow-sm bg-[#18181B] text-white py-2 px-3 rounded-lg font-medium hover:opacity-85 active:scale-95 transition-opacity dark:bg-[#f4f4f5] dark:text-gray-900"
          to="https://www.instagram.com/bedirzd/"
          target="_blank"
          ><svg
            class="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            /></svg
          >Instagram</nuxt-link
        >
        <nuxt-link
          class="inline-flex items-center gap-2 shadow-sm bg-[#18181B] text-white py-2 px-3 rounded-lg font-medium hover:opacity-85 active:scale-95 transition-opacity dark:bg-[#f4f4f5] dark:text-gray-900"
          to="https://open.spotify.com/user/nfycgh3o84n840zhh3e627pkl"
          target="_blank"
          ><svg
            class="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
            /></svg
          >Spotify</nuxt-link
        >
        <nuxt-link
          class="inline-flex items-center gap-2 shadow-sm bg-[#18181B] text-white py-2 px-3 rounded-lg font-medium hover:opacity-85 active:scale-95 transition-opacity dark:bg-[#f4f4f5] dark:text-gray-900"
          to="https://unsplash.com/@bedirdemir"
          target="_blank"
          ><svg
            class="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.501 11v5h7v-5h5.5v10h-18V11zm7-8v5h-7V3z"
            /></svg
          >Unsplash</nuxt-link
        >
        <nuxt-link
          class="inline-flex items-center gap-2 shadow-sm bg-[#18181B] text-white py-2 px-3 rounded-lg font-medium hover:opacity-85 active:scale-95 transition-opacity dark:bg-[#f4f4f5] dark:text-gray-900"
          to="https://lichess.org/@/bedirdemir"
          target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10.457 6.161a.237.237 0 0 0-.296.165c-.8 2.785 2.819 5.579 5.214 7.428c.653.504 1.216.939 1.591 1.292c1.745 1.642 2.564 2.851 2.733 3.178a.24.24 0 0 0 .275.122c.047-.013 4.726-1.3 3.934-4.574a.257.257 0 0 0-.023-.06L18.204 3.407L18.93.295a.24.24 0 0 0-.262-.293c-1.7.201-3.115.435-4.5 1.425c-4.844-.323-8.718.9-11.213 3.539C.334 7.737-.246 11.515.085 14.128c.763 5.655 5.191 8.631 9.081 9.532c.993.229 1.974.34 2.923.34c3.344 0 6.297-1.381 7.946-3.85a.24.24 0 0 0-.372-.3c-3.411 3.527-9.002 4.134-13.296 1.444c-4.485-2.81-6.202-8.41-3.91-12.749C4.741 4.221 8.801 2.362 13.888 3.31c.056.01.115 0 .165-.029l.335-.197c.926-.546 1.961-1.157 2.873-1.279l-.694 1.993a.243.243 0 0 0 .02.202l6.082 10.192c-.193 2.028-1.706 2.506-2.226 2.611c-.287-.645-.814-1.364-2.306-2.803c-.422-.407-1.21-.941-2.124-1.56c-2.364-1.601-5.937-4.02-5.391-5.984a.239.239 0 0 0-.165-.295"
            /></svg
          >Lichess</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Bedir Zana Demir",
  description:
    "Çocukluğumdan beri teknolojiye ve yazılıma meraklıyım. Frontend developer olarak kullanıcı deneyimini gözeten web uygulamaları tasarlıyor ve geliştiriyorum. Yeni teknolojileri keşfetmeyi, öğrenmeyi ve ürün geliştirmeyi seviyorum. Bunların haricindeki kişisel zamanlarımda kitap okumayı, fotoğraf çekmeyi ve bir ziraat mühendisi adayı olarak doğada olmayı seviyorum.",
});
</script>
