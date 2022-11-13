<template>
    <div class="flex justify-between items-center hover:bg-[#2F82FF] rounded-[15px] py-[10px] px-[15px]">
        <div class="flex gap-[10px] items-center">
            <slot name="icon1"></slot>
            <slot name="title"></slot>
        </div>
        <slot name="icon2"></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
