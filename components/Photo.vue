<template>
  <nuxt-link
    :to="data.links.html"
    class="focus:scale-105 duration-500 transition-all"
    target="_blank"
  >
    <img
      class="rounded-lg"
      loading="lazy"
      :src="data.urls.regular"
      :alt="data.description"
    />
  </nuxt-link>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
</script>
