<template>
  <div class="flex flex-col min-h-screen">
    <Navigations />
    <main
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full"
    >
      <!-- if i want use 'pages' i must have this link or delete app.vue , and index.vue inside folder pages will bee defoult home -->
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
