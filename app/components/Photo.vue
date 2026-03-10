<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
</script>

<template>
  <nuxt-link
    :to="data.links.html"
    class="focus:scale-105 duration-500 transition-all"
    target="_blank"
  >
    <NuxtImg
      class="rounded-lg"
      loading="lazy"
      decoding="async"
      :src="data.urls.regular"
      :alt="data.description || data.alt_description || 'Unsplash photo'"
      :width="data.width"
      :height="data.height"
      sizes="100vw sm:50vw lg:50vw xl:33vw"
      format="webp"
      quality="70"
    />
  </nuxt-link>
</template>
