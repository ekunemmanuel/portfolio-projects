<script setup>
import CardList from "../components/CardList.vue";
import Software from "../components/Software.vue";
import Navigation1 from "../components/Navigation1.vue";
</script>

<template>
  <div id="app">
    <header class="bg-green-400 max-w-[350px] w-full">
      <Navigation1 />
    </header>

    <main class="w-full flex">
      <section class="bg-[#F8F8F8 ] max-w-[492px] h-[100vh] w-full py-[56px]">
        <CardList />
      </section>
      <section class="px-[86px] pt-[56px] w-full g-red-400">
        <Software />
      </section>
    </main>
  </div>
</template>

<style scoped>
#app {
  display: flex;
}
</style>
