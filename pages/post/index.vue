<template>
  <div>
    <p class="text-lg">İlgi alanıma giren çeşitli konularda yazdığım notlar.</p>
  </div>
  <div class="grid gap-11 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-12 mt-10">
    <ContentList path="/post">
      <template #default="{ list }">
        <PostCard
          v-for="post in list"
          :data="post"
          :key="post._path"
          class=""
        />
      </template>
      <template #not-found>
        <p>Yazı bulunamadı...</p>
      </template>
    </ContentList>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Yazılar | Bedir Zana Demir",
  description: "İlgi alanıma giren çeşitli konularda yazdığım notlar.",
});
</script>
