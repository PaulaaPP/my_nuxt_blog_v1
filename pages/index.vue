<script setup>
const { data: posts } = await useAsyncData("latest-post", () =>
  queryContent("/blog").sort({ data: 1 }).limit(3).find()
);
</script>
<!-- Home fo all site -->
<template>
  <section class="flex flex-col">
    <h1 class="text-3xl md:text-5xl my-14 italic font-bold text-gradient-home">
      Od Zera do Front-End Developera
    </h1>

    <div>
      <img
        class="w-5/12 md:w-1/6 p-5 opacity-70 float-left rounded-[2.5rem]"
        src="../assets/img/myfoto3D.png"
      />
      <h2 class="text-3xl text-center md:text-start mt-10 italic">
        👋🏻 Witaj, jestem Paula!
      </h2>
      <p class="text-base sm:text-xs text-gray-900 p-2 italic">
        Jestem początkującym frontem developerem
      </p>
      <p class="text-lg py-2">
        Jako samouk programowania i mocno wierzę, że zaangażowanie, wysiłek i
        determinacja pozwalają osiągnąć sukces w każdej dziedzinie.
      </p>
      <p class="text-lg py-2">
        Na moim blogu skupiam się głównie na technologiach webowych, ale również
        będę dzielić się osobistymi doświadczeniami oraz historią mojej własnej
        drogi w nauce programowania. Chcę stworzyć miejsce, które będzie
        wspierać początkujących, pomagając im pokonać trudności na fascynującej
        ścieżce nauki programowania.
      </p>

      <h4 class="mt-5 text-gray-700">
        <Icon name="circle-flags:en" class="text-xl"></Icon>
        Do you prefer the English language ? No problem ! I always publish my
        articles on platforms such as DEV.to and on my LinkedIn profile.
      </h4>
    </div>
  </section>

  <section class="my-16">
    <h2 class="text-3xl font-bold mt-8">Ostanio dodane posty</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
  </section>
</template>
