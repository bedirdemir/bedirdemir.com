<template>
  <div>
    <p class="text-lg">
      Okuduğum kitaplardan önemli çıkarımlarımın ve notlarımın yer aldığı
      kişisel bir kütüphane.
    </p>
  </div>
  <div class="grid gap-11 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10 mt-10">
    <ContentList path="/book-notes">
      <template #default="{ list }">
        <BookCard v-for="book in list" :data="book" :key="book._path" />
      </template>
      <template #not-found>
        <p>Kitap bulunamadı...</p>
      </template>
    </ContentList>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Kitap Notları | Bedir Zana Demir",
  description:
    "Okuduğum kitaplardan önemli çıkarımlarımın ve notlarımın yer aldığı kişisel bir kütüphane.",
});
</script>
