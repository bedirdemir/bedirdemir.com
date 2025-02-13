<template>
  <ContentDoc>
    <template #default="{ doc }">
      <article
        class="prose prose-neutral prose-rose max-w-none prose-img:rounded prose-img:border prose-img:w-full dark:prose-invert"
      >
        <h1 class="font-bold tracking-tight my-0">{{ doc.title }}</h1>
        <h2 class="my-5 text-xl font-normal opacity-90">
          {{ doc.description }}
        </h2>
        <img
          :src="doc.image"
          :alt="doc.description"
          class="aspect-[16/9] border-none"
        />
        <div class="flex gap-2 opacity-70 tracking-wider text-sm lg:text-base">
          <time :datetime="doc.date">{{ doc.date }}</time>
          <span>·</span>
          <div>{{ readingTime(doc.readingTime.words) }} okuma süresi</div>
        </div>
        <ContentRenderer :value="doc" class="lg:text-lg lg:leading-[1.9rem]" />
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
