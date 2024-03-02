<template>
  <header
    class="bg-[#F4F4F5] flex flex-col lg:flex-row justify-between lg:items-center rounded-xl py-4 px-4 lg:p-4 mx-6 dark:bg-gray-800"
  >
    <div class="flex justify-between items-center">
      <NuxtLink to="/"
        ><h1 class="font-semibold opacity-90 text-nowrap">
          Bedir Zana Demir
        </h1></NuxtLink
      >
      <div class="flex gap-4 lg:gap-4">
        <svg
          @click="colorModeToggle"
          class="block lg:hidden size-6 cursor-pointer opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
          />
        </svg>
        <div @click="navToggle" class="block lg:hidden">
          <svg
            class="w-6 opacity-70"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75m0 4A.75.75 0 0 1 2.75 7h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75m0 4a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="flex gap-4 items-center">
      <AppNavigation
        @click="navToggle"
        class="hidden lg:block mt-4 lg:mt-0"
        :class="{ '!block': isOpen }"
      />
      <svg
        @click="colorModeToggle"
        class="hidden lg:block size-6 cursor-pointer opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
        />
      </svg>
    </div>
  </header>
</template>
<script setup>
const isOpen = ref(false);
const colorMode = useColorMode();

const navToggle = () => {
  isOpen.value = !isOpen.value;
};

const colorModeToggle = () => {
  if (colorMode.value == "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
};
</script>
