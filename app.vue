<template>
  <NuxtLoadingIndicator :height="3" :throttle="10" />
  <div class="bg-white dark:bg-gray-900 dark:text-white">
    <div class="max-w-screen-md mx-auto pt-6">
      <AppHeader />
      <main class="min-h-screen py-10 lg:pt-16 mx-6">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
