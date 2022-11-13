<script>
export default {
  props: ["ipInfo"],
};
</script>
<template>
  <div
    class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row bg-white gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md"
  >
    <!-- flex item -->
    <div v-for="(detail, i) in ipInfo" :key="i" class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">{{ detail.title }}</h3>
      <span class="text-2xl">{{ detail.info }}</span>
    </div>
  </div>
</template>
