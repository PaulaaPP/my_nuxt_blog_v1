<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").find()
);
</script>

<template>
  <h1 class="my-6 py-1 text-gradient-title">Posty</h1>
  <p class="text-lg">
    Uwielbiam opowiadać o tym, co właśnie krąży mi po głowie, projekty, nad
    którymi teraz pracuję, lub nowinki technologiczne, które wciąż odkrywam. To
    moje sposobów na wyrażenie siebie i dzielenie się swoimi pasjami. Zawsze
    trafiają się nowe fascynujące rzeczy, które mnie wciągają, i z przyjemnością
    się nimi dzielę w moich tekstach.
  </p>

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <!-- this redner all post from component/content/markdwomw -->
    <Post :posts="posts" />
  </section>
</template>
