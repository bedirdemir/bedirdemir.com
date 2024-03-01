<template>
  <NuxtLink :to="data._path" class="group">
    <div class="filter contrast-[0.9] mb-4">
      <img
        :src="data.image"
        :alt="data.description"
        class="object-cover w-full transition duration-300 rounded-lg aspect-[16/9] group-hover:opacity-90"
      />
    </div>
    <!-- details  -->
    <div class="flex flex-col gap-2 p-1">
      <div
        class="flex items-center gap-4 text-gray-500 text-sm tracking-widest dark:text-gray-400"
      >
        <div class="flex gap-1 items-center">
          <svg
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 6H5v10h14zM8.5 15a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm4 0a1 1 0 0 1 .117 1.993L12.5 17h-1a1 1 0 0 1-.117-1.993L11.5 15zm-4-4a1 1 0 0 1 .117 1.993L8.5 13h-1a1 1 0 0 1-.117-1.993L7.5 11zm4 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm4 0a1 1 0 0 1 .117 1.993L16.5 13h-1a1 1 0 0 1-.117-1.993L15.5 11zM19 5H5v2h14z"
              />
            </g>
          </svg>
          <time :datetime="data.date">{{ data.date }}</time>
        </div>
        <div class="flex gap-1 items-center">
          <svg
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="m512 863.36l384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36"
            />
            <path fill="currentColor" d="M480 192h64v704h-64z" />
          </svg>
          <div>{{ readingTime(data.readingTime.words) }}</div>
        </div>
      </div>
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-50">
        {{ data.title }}
      </h2>
      <p class="text-gray-600 capsule dark:text-gray-400">
        {{ data.description }}
      </p>
    </div>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;

const readingTime = (words, readingSpeed = 200) => {
  let min = Math.ceil(words / readingSpeed);
  return min === 1 ? "1 dakika" : min + " dakika";
};
</script>
