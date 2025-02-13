<template>
  <div>
    <p class="text-lg">İlgi alanıma giren çeşitli konularda yazdığım notlar.</p>
  </div>
  <div
    v-if="articles.length > 0"
    class="grid gap-11 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-12 mt-10"
  >
    <PostCard v-for="post in articles" :data="post" :key="post._path" />
  </div>
  <div v-else class="mt-4 font-semibold text-lg">
    <p>Yazı bulunamadı...</p>
  </div>
</template>
<script setup>
const articles = await queryContent("/").sort({ id: -1 }).find();

useSeoMeta({
  title: "Yazılar | Bedir Zana Demir",
  description: "İlgi alanıma giren çeşitli konularda yazdığım notlar.",
});
</script>
