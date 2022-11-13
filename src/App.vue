<script setup>
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="relative">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/calculator">Calculator</RouterLink>
      <RouterLink :to="{ name: 'gridlayout' }">Grid</RouterLink>
      <RouterLink :to="{ name: 'room-homepage' }">Room</RouterLink>
      <RouterLink :to="{ name: 'advice' }">Advice</RouterLink>
      <RouterLink :to="{ name: 'gridprice' }">Price</RouterLink>
      <RouterLink :to="{ name: 'connectify' }">Connectify</RouterLink>
      <RouterLink :to="{ name: 'fintory' }">Fintory</RouterLink>
      <RouterLink :to="{ name: 'sidebar' }">Sidebar</RouterLink>
      <RouterLink :to="{ name: 'form' }">Form</RouterLink>
    </nav>
  </header>

  <RouterView class="h-[calc(100vh-3rem)]" />
</template>

<style>
.body {
  min-height: calc(100vh - 3rem);
  color: var(--text-color);
  background: var(--background-color);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: 'Space Mono', monospace;
  font-size: 18px;
}
</style>
<style scoped>
@import "@/assets/base.css";

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: hsl(160, 100%, 37%);
  }
}

header {
  /* width: 100%; */
  text-align: center;
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

nav a.router-link-exact-active {
  color: rgb(146, 145, 145);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.5rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
