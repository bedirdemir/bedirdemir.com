<template>
  <NuxtImg
    :src="refinedSrc"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    sizes="100vw lg:960px"
    format="webp"
    quality="75"
    loading="lazy"
    decoding="async"
  />
</template>

<script setup>
import { joinURL, withLeadingSlash, withTrailingSlash } from "ufo";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
    if (base !== "/" && !props.src.startsWith(base)) {
      return joinURL(base, props.src);
    }
  }

  return props.src;
});
</script>
