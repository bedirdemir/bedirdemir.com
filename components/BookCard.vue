<template>
  <NuxtLink
    :to="data._path"
    class="group flex flex-col text-center items-center lg:items-start lg:text-left"
  >
    <!-- image  -->
    <div class="filter contrast-[0.9] mb-4">
      <img
        :src="data.image"
        :alt="data.description"
        class="object-contain size-80 lg:size-72 p-5 border transition duration-500 rounded-lg group-hover:opacity-85 dark:border-gray-700"
      />
    </div>
    <!-- details  -->
    <div class="flex flex-col h-full justify-between gap-2 p-1">
      <!-- title  -->
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-50">
        {{ data.title }}
      </h2>
      <div class="space-y-1 lg:space-y-2">
        <!-- author  -->
        <div
          class="text-gray-600 text-lg lg:text-base capsule dark:text-gray-400"
        >
          {{ data.author }}
        </div>
        <!-- date  -->
        <div
          class="flex items-center justify-center lg:justify-normal gap-4 text-gray-500 lg:text-sm tracking-widest"
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
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
              />
            </svg>
            <div>{{ data.rating }}</div>
          </div>
        </div>
      </div>
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
</script>
