<script setup>
const { data: posts } = await useAsyncData("latest-post", () =>
  queryContent("/blog").sort({ data: 1 }).limit(3).find()
);
</script>
<!-- Home fo all site -->
<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">👋🏻 Witaj, jestem Paula!</h1>
    <p class="text-base text-gray-900 p-2 italic">
      Jestem początkującym frontem developerem
    </p>
  </section>

  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">My Story</h2>
      <p class="text-lg py-2">
        Jestem programistą-samoukiem, który mocno wierzy, że można osiągnąć
        wszystko w tym życiu, jeśli się do tego przyłoży umysł, zakasać rękawy i
        włożyć w to pracę.
      </p>
      <p class="text-lg py-2">
        I have been writing software for over 20+ years now and I use my
        knowledge, passion, and influence to help other developers achieve their
        goals. I teach online and currently, have over 160,000 students.
      </p>
    </div>
    <img
      src="../assets/img/myfoto3D.png"
      class="w-1/2 md:max-w-sm p-8 mx-auto"
    />
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>
