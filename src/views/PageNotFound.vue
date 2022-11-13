<template>
  <div
    class="h-screen flex justify-center items-center text-[#e2c93a] text-center"
  >
    <div
      class="bg-white w-[50rem] h-[20rem] rounded-[3rem] flex justify-center items-center"
    >
      <div>
        <h1 class="text-[3rem]">Sorry Page Not Found 😭</h1>
        <div class="text-[3rem] animate-bounce">
          <RouterLink :to="{ name: 'home' }">Back Home</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
