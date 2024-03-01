<template>
  <ContentDoc>
    <template #default="{ doc }">
      <article
        class="prose prose-zinc max-w-none prose-img:rounded dark:prose-invert"
      >
        <!-- book details  -->
        <div
          class="flex flex-col justify-center items-center text-center border-b pb-7 dark:border-b-gray-700"
        >
          <img
            :src="doc.image"
            :alt="doc.description"
            class="size-80 object-contain flex border p-4 !rounded-xl bg-gradient-to-br from-transparent to-slate-100 !mt-0 dark:to-gray-800 dark:border-gray-700"
          />
          <h1 class="font-bold tracking-tight my-0">{{ doc.title }}</h1>
          <!-- book meta -->
          <div
            class="text-sm flex flex-col justify-center items-center gap-1 mt-3"
          >
            <div class="font-semibold">{{ doc.author }}</div>
            <!-- date & rating  -->
            <div class="flex gap-2">
              <div class="flex gap-1 items-center">
                <time :datetime="doc.date">{{ doc.date }}</time>
              </div>
              <div class="flex gap-1 items-center">
                <svg
                  class="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
                  />
                </svg>
                <div>{{ doc.rating }}</div>
              </div>
            </div>
            <!-- reading time  -->
            <div>{{ readingTime(doc.readingTime.words) }} okuma süresi</div>
            <!-- tags  -->
            <div class="flex flex-wrap gap-2 pt-1">
              <div
                v-for="(tag, i) in doc.tags"
                :key="i"
                class="bg-gray-100 text-gray-900 p-2 font-light rounded-xl dark:bg-gray-800 dark:text-gray-50"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
        <ContentRenderer :value="doc" class="text-lg" />
      </article>
    </template>
    <template #not-found>
      <div class="flex flex-col justify-center items-center gap-4 mt-28">
        <svg
          class="size-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-9v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m7-1v4a1 1 0 0 0 1 1h3m0-5v10"
          />
        </svg>
        <h1>
          Yazı bulunamadı :( Tüm yazıları görüntülemek için
          <NuxtLink to="/post" class="underline">tıklayın</NuxtLink>
        </h1>
      </div>
    </template>
  </ContentDoc>
</template>
<script setup>
const readingTime = (words, readingSpeed = 200) => {
  let min = Math.ceil(words / readingSpeed);
  return min === 1 ? "1 dakika" : min + " dakika";
};
</script>
