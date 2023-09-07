<script setup>
const links = [
  {
    name: "GitHub",
    href: "https://github.com/PaulaaPP?tab=repositories",
    icon: "entypo-social:github-with-circle",
  },

  {
    name: "LinkedIn",
    href: "www.linkedin.com/in/paula-piskorz-a02139283",
    icon: "entypo-social:linkedin-with-circle",
  },
];
</script>
<template>
  <footer class="navbar-gradient">
    <section
      class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row"
    >
      <p class="flex-1">&copy; PaulaPiskorz 2023. All Rights Reserved</p>
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.href"
        target="_blank"
      >
        <Icon :name="link.icon" size="1.5rem" class="text-gray-300 mx-1" />
      </a>
    </section>
  </footer>
</template>
