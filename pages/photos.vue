<template>
  <div>
    <p class="text-lg">
      Fotoğraf çekerek anı biriktirmek çevremdeki detayları ve güzellikleri
      keşfetmemi sağlıyor.
    </p>
    <!-- stats -->
    <div class="grid grid-cols-2 gap-4 lg:gap-10 justify-between mt-10">
      <div
        class="flex items-center justify-between gap-2 bg-gray-50 rounded-xl shadow-sm border px-4 lg:px-5 py-3 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-col gap-1">
          <div class="font-mono text-sm tracking-wider uppercase">
            GÖRÜNTÜLEME
          </div>
          <div class="font-semibold text-xl leading-none">
            {{ formatNumberWithDot(stats.views.total) }}
          </div>
        </div>
        <svg
          class="size-5 lg:size-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M13.232 1.36c.632-.758 1.863-.24 1.763.742L14.289 9H20a1 1 0 0 1 .768 1.64l-10 12c-.632.758-1.863.24-1.763-.742L9.711 15H4a1 1 0 0 1-.768-1.64zM6.135 13h5.348a.4.4 0 0 1 .398.44l-.553 5.405L17.865 11h-5.348a.4.4 0 0 1-.398-.44l.553-5.404z"
            />
          </g>
        </svg>
      </div>
      <div
        class="flex items-center justify-between gap-2 bg-gray-50 rounded-xl shadow-sm border px-4 lg:px-5 py-3 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-col gap-1">
          <div class="font-mono text-sm tracking-wider uppercase">İNDİRME</div>
          <div class="font-semibold text-xl leading-none">
            {{ formatNumberWithDot(stats.downloads.total) }}
          </div>
        </div>
        <svg
          class="size-5 lg:size-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M20 15a1 1 0 0 1 1 1v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a1 1 0 1 1 2 0v4h14v-4a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v10.243l2.536-2.536a1 1 0 1 1 1.414 1.414l-4.066 4.066a1.25 1.25 0 0 1-1.768 0L7.05 12.121a1 1 0 1 1 1.414-1.414L11 13.243V3a1 1 0 0 1 1-1"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
  <!-- photos -->
  <div class="grid items-end gap-8 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-6 mt-12">
    <Photo v-for="(photo, i) in photos" :data="photo" :key="i" />
  </div>
  <!-- more -->
  <div class="mt-16 text-center font-medium">
    <nuxt-link
      to="https://unsplash.com/@bedirdemir"
      target="_blank"
      class="bg-gray-100 p-3 rounded-xl transition-opacity hover:opacity-85 dark:text-gray-900"
      >Tüm fotoğrafları gör...</nuxt-link
    >
  </div>
</template>
<script setup>
const { data } = await useFetch("/api/photos");
const photos = data.value.photos;
const stats = data.value.stats;

useSeoMeta({
  title: "Fotoğraflar | Bedir Zana Demir",
  description:
    "Fotoğraf çekerek anı biriktirmek çevremdeki detayları ve güzellikleri keşfetmemi sağlıyor.",
});

const formatNumberWithDot = (number) => {
  var reversedNumber = number.toString().split("").reverse().join("");
  var formattedNumber = reversedNumber.match(/.{1,3}/g).join(".");
  return formattedNumber.split("").reverse().join("");
};
</script>
