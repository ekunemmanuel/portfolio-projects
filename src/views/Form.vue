<template>
    <div class="flex sm:flex-row flex-col">
        <div class="lg:w-[100%] w-[50%] h-[calc(100vh-3rem)] bg-[#285AC4] hidden sm:block">
            <swiper class="max-w-[400px] h-full w-full text-white " :loop="true" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :slides-per-view="1" :space-between="20" :pagination="{
    bulletClass: 'custom-bullets',
    bulletActiveClass: 'custom-bullets-active',
    clickable: true,
    bulletElement: 'button',
    type: 'bullets'
}" :modules="[Autoplay, Pagination, Navigation]">
                <swiper-slide class="flex items-center justify-center">
                    <div class="text-center">
                        <h1 class="text-[40px] font-bold uppercase">Lorem1</h1>
                        <p class="text-[20px] font-black lowercase">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus enim
                            eveniet praesentium eos qui aut.</p>
                    </div>
                </swiper-slide>
                <swiper-slide class="flex items-center justify-center">
                    <div class="text-center">
                        <h1 class="text-[40px] font-bold uppercase">Lorem2</h1>
                        <p class="text-[20px] font-black lowercase">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus enim
                            eveniet praesentium
                            eos qui aut.</p>
                    </div>
                </swiper-slide>
                <swiper-slide class="flex items-center justify-center">
                    <div class="text-center">
                        <h1 class="text-[40px] font-bold uppercase">Lorem3</h1>
                        <p class="text-[20px] font-black lowercase">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus enim
                            eveniet praesentium
                            eos qui aut.</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="w-full h-[calc(100vh-3rem)] grid place-items-center p-5 bg-[#fff]">
            <div class="max-w-[300px] relative">
                <!-- header -->
                <div class="">
                    <h1 class="text-[40px] text-center ">Hello Again!</h1>
                    <p class="text-center mt-[18px] mb-[50px] text-[14px]">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Tempore
                        ipsam, libero assumenda</p>
                </div>
                <div class="flex flex-col gap-[40px] w-full">
                    <div class="flex flex-col input relative ">
                        <input placeholder=" "
                            class=" border-[1.5px]  duration-300 ease-out px-[15px] py-[10px] outline-none rounded-[10px]"
                            type="email" id="email">
                        <div class="absolute label px-[15px] py-[10px]  duration-300 ease-out fldex items-center">
                            <label class="block text-[#adasdad]" for="email">Email</label>
                        </div>
                    </div>
                    <div class="flex flex-col input relative ">
                        <input placeholder=" "
                            class=" border-[1.5px]  duration-300 ease-out px-[15px] py-[10px] outline-none rounded-[10px]"
                            type="password" id="password">
                        <div class="absolute label px-[15px] py-[10px]  duration-300 ease-out fldex items-center">
                            <label class="block text-[#adasdad]" for="password">Password</label>
                        </div>
                        <div class="flex justify-between items-center mt-[15px]">
                            <div class="cursor-pointer">
                                <input type="checkbox" id="remember">
                                <label for="remember" class="ml-2 cursor-pointer">Remember me</label>
                            </div>
                            <p class="text-[#285AC4] cursor-pointer text-[14px]">Recover password</p>
                        </div>
                    </div>

                    <!-- button -->
                    <div class="w-full flex flex-col gap-[15px]">
                        <button
                            class="text-center w-full bg-[#285ac4] hover:bg-white hover:text-[#285ac4] hover:border-[#285ac4] border-[1.5px] duration-300 text-white p-[12px] rounded-[10px]">Login</button>
                        <button class="text-center w-full border-[1.5px] text-[#5f5f5f] p-[12px] rounded-[10px]  hover:bg-white hover:text-[#285ac4] hover:border-[#285ac4]  duration-300">Sign in
                            with Google</button>
                    </div>
                </div>
                <div>
                    <p class="text-[14px] text-center mt-[80px] mb-[30px]">Don't have an account yet? <span
                            class="text-[#285ac4] font-bold cursor-pointer">Sign up</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';
</script>

<style>
.custom-bullets-active {
    /* background-color: red !important; */
    opacity: 1 !important;
    border-radius: 3px !important;
    width: 20px !important;
    /* height: 30px !important; */
}

.custom-bullets {
    background-color: rgb(255, 255, 255) !important;
    width: 10px;
    height: 10px;
    appearance: none;
    display: inline-block;
    border-radius: 50%;
    opacity: .2;
    gap: 3px;
    margin: 2px;
    transition-duration: 300ms;
}
</style>

<style scoped>
.input input:focus {
    background: white;
    border: 1.5px #285AC4 solid;
}

.input input:focus+.label,
.input input:not(:placeholder-shown)+.label {
    transform: translateY(-10px);
    background: rgb(255, 255, 255);
    line-height: 0;
    height: fit-content;
    width: fit-content;
    color: #000;
    z-index: 1;
}

.label {
    color: rgb(148, 142, 142);
    font-size: 14px;
}

.input input:focus+.label {
    color: #285AC4;
}
</style>
