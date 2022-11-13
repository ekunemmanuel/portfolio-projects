<template>
    <div class="grid place-items-center bg-[#ffffff]">
        <div class="max-w-[300px] w-full bg-[#E8EEF1] rounded-[30px] px-[10px] py-[40px]">
            <div class="mx-[15px]">
                <div class="flex gap-[10px] items-center">
                    <img class="rounded-full border-[4px] object-cover" src="../assets/images/image-patrick.jpg" alt="">
                    <div>
                        <small class="block text-[#788CA6] text-[16px] font-[600]">Good Day,👋🏿</small>
                        <p class="text-[30px] text-[#000] font-[700] leading-[1rem]">Pablo</p>
                    </div>

                </div>
                <hr class="border-[#C8D7E2]  my-[2.5rem]">
            </div>
            <div class="">
                <MenuBlock />
                <hr class="border-[#C8D7E2] mx-[15px] my-[2.5rem]">
            </div>
        </div>
    </div>
</template>

<script setup>

import MenuBlock from '../components/MenuBlock.vue'

</script>
