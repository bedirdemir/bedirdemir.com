<script setup>
import LoadingSpinner from "~/components/LoadingSpinner.vue";

const { status, data, error } = await useFetch("/api/photos");

const photos = computed(() => data.value?.photos || []);
const stats = computed(() => data.value?.stats || null);

useSeoMeta({
  title: "Fotoğraflar | Bedir Zana Demir",
  description:
    "Fotoğraf çekerek anı biriktirmek çevremdeki detayları ve güzellikleri keşfetmemi sağlıyor.",
});

const numberFormatter = new Intl.NumberFormat("tr-TR");

const formatNumber = (number) => {
  const safeNumber = Number(number) || 0;
  return numberFormatter.format(safeNumber);
};

const errorMessage = computed(() => {
  const fetchError = error.value || {};

  return (
    fetchError?.data?.message ||
    fetchError?.statusMessage ||
    "Fotoğraflar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
  );
});
</script>

<template>
  <div>
    <p class="text-lg">
      Fotoğraf çekerek anı biriktirmek çevremdeki detayları ve güzellikleri
      keşfetmemi sağlıyor.
    </p>
  </div>

  <div v-if="status === 'pending'" class="text-center mt-8">
    <LoadingSpinner />
  </div>

  <div
    v-else-if="error"
    class="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-200"
  >
    <p class="font-semibold">Fotoğraflar yüklenemedi.</p>
    <p class="mt-1 text-sm">{{ errorMessage }}</p>
  </div>

  <template v-else>
    <!-- stats -->
    <div class="grid grid-cols-2 gap-4 lg:gap-10 justify-between mt-8 lg:mt-10">
      <div
        class="flex items-center justify-between gap-2 bg-gray-50 rounded-xl shadow-sm border px-4 lg:px-5 py-3 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-col gap-1">
          <div class="font-mono text-sm tracking-wider uppercase">
            GÖRÜNTÜLEME
          </div>
          <div class="font-semibold text-xl leading-none">
            {{ formatNumber(stats?.views?.total) }}
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
            {{ formatNumber(stats?.downloads?.total) }}
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
    <!-- photos -->
    <div
      v-if="photos.length > 0"
      class="mt-8 lg:mt-10 lg:relative lg:left-1/2 lg:right-1/2 lg:w-screen lg:max-w-[1200px] lg:-translate-x-1/2 lg:px-6"
    >
      <div class="masonry columns-1 sm:columns-2 xl:columns-3 gap-4">
        <Photo
          v-for="photo in photos"
          :data="photo"
          :key="photo.id"
          class="mb-6 lg:mb-4"
        />
      </div>
    </div>
    <div
      v-else
      class="mt-12 rounded-xl border border-gray-200 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300"
    >
      Gösterilecek fotoğraf bulunamadı.
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
</template>

<style scoped>
.masonry > * {
  break-inside: avoid;
  display: block;
  width: 100%;
}

.masonry::after {
  content: "";
  display: block;
  height: 2rem;
}
</style>
