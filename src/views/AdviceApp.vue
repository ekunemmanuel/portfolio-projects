<template>
  <div class="body">
    <div class="contain">
      <div class="contained">
        <div v-if="result">
          <h1 class="h1">Advice # {{ result.id }}</h1>
          <p class="p">
            {{ result.advice }}
          </p>
        </div>
        <div v-else class="grid place-items-center">
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div class="img">
          <img src="../assets/images/pattern-divider-desktop.svg" alt="" />
        </div>
        <div class="mobile">
          <img src="../assets/images/pattern-divider-mobile.svg" alt="" />
        </div>
        <button class="button" @click="getAdvice">
          <div>
            <img src="../assets/images/icon-dice.svg" alt="" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
onMounted(async () => {
  const { data } = await axios(url);
  result.value = data.slip;
});
const url = "https://api.adviceslip.com/advice";
const result = ref("");
const getAdvice = async () => {
  const { data } = await axios(url);
  result.value = data.slip;
};
</script>

<style scoped>
@import url("../assets/advice.css");
</style>
