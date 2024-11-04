<template>
  <NuxtLoadingIndicator :height="1.5" :throttle="10" />
  <div
    class="bg-white transition-colors duration-75 dark:bg-gray-900 dark:text-white"
  >
    <div class="max-w-screen-md mx-auto pt-6">
      <AppHeader />
      <main class="min-h-screen py-10 lg:pt-16 mx-6">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
