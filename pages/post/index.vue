<template>
  posts
  <main>
    <ContentList path="/post" v-slot="{ list }">
      <div v-for="post in list" :key="post._path" class="">
        <NuxtLink :to="post._path">
          <h2 class="text-lg font-bold">{{ post.title }}</h2>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>
