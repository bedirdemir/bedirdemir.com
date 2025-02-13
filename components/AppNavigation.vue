<template>
  <nav class="">
    <ul class="flex flex-col lg:flex-row gap-4 w-full">
      <li>
        <NuxtLink
          to="/"
          class="hover:opacity-100 opacity-70 transition-opacity no-underline inline-block w-full"
          >Hakkımda</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/writing"
          class="hover:opacity-100 opacity-70 transition-opacity no-underline inline-block w-full"
          >Yazılar</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/photos"
          class="hover:opacity-100 opacity-70 transition-opacity no-underline inline-block w-full"
          >Fotoğraflar</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.router-link-active {
  @apply opacity-100 text-blue-700 dark:text-blue-500;
}
</style>
