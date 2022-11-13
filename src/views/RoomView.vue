<template>
  <header class="body">
    <Navigation />
  </header>
  <main>
    <div class="flex justify-center items-center">
      sup
    </div>
  </main>
</template>

<script setup lang="ts">
import Navigation from "../components/Navigation.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap");

.body {
  background-color: hsl(210, 46%, 95%) !important;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 13px !important;
}
</style>
