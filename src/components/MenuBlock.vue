<template>
    <div>
        <small class="mx-[15px] text-[#788CA6]">Menu: <span class="font-bold">6</span> </small>
        <div>
            <MenuTile class="menutile duration-300">
                <template #icon1>
                    <IconHolder>
                        <template #icon>
                            <DashBoardIcon class="icon" />
                        </template>
                    </IconHolder>
                </template>
                <template #title>
                    <span class="title">Dashboard</span>
                </template>
                <template #icon2>
                    <IconHolder>
                        <template #icon>
                            <Filter class="icon" />
                        </template>
                    </IconHolder>
                </template>
            </MenuTile>
            <MenuTile class="menutile duration-300">
                <template #icon1>
                    <IconHolder>
                        <template #icon>
                            <Case class="icon" />
                        </template>
                    </IconHolder>
                </template>
                <template #title>
                    <span class="title">My Project task</span>
                </template>

            </MenuTile>
            <MenuTile class="menutile duration-300">
                <template #icon1>
                    <IconHolder>
                        <template #icon>
                            <Calendar class="icon" />
                        </template>
                    </IconHolder>
                </template>
                <template #title>
                    <span class="title">Calendar</span>
                </template>
                <template #icon2>
                    <IconHolder>
                        <template #icon>
                            <Plus class="icon p-[6px] bg-white rounded-full" />
                        </template>
                    </IconHolder>
                </template>
            </MenuTile>
            <MenuTile class="menutile duration-300">
                <template #icon1>
                    <IconHolder>
                        <template #icon>
                            <Mail class="icon" />
                        </template>
                    </IconHolder>
                </template>
                <template #title>
                    <span class="title">Mail</span>
                </template>
                <template #icon2>
                    <div class="flex justify-between gap-[10px] items-center">
                        <div class="flex">
                            <img src="../assets/images/image-daniel.jpg" class="rounded-full w-[25px] h-[25px]" alt="person">
                            <img src="../assets/images/image-daniel.jpg" class="rounded-full -ml-2 w-[25px] h-[25px]" alt="person">
                            <img src="../assets/images/image-daniel.jpg" class="rounded-full -ml-2 w-[25px] h-[25px]" alt="person">
                            <img src="../assets/images/image-daniel.jpg" class="rounded-full -ml-2 w-[25px] h-[25px]" alt="person">
                        </div>
                        <span class="bg-[red] text-white text-center items-center flex justify-center text-xs w-[20px] h-[20px] font-bold rounded-full">4</span>
                    </div>
                </template>
            </MenuTile>
            <MenuTile class="menutile duration-300">
                <template #icon1>
                    <IconHolder>
                        <template #icon>
                            <div class="relative">
                                <Bell class="icon" />
                                <span class="block p-1 bg-[red] rounded-full absolute top-0 right-[1px]"></span>
                            </div>
                        </template>
                    </IconHolder>
                </template>
                <template #title>
                    <span class="title">Notification</span>
                </template>
            </MenuTile>
            <MenuTile class="menutile duration-300">
                <template #icon1>
                    <IconHolder>
                        <template #icon>
                            <Sale class="icon" />
                        </template>
                    </IconHolder>
                </template>
                <template #title>
                    <span class="title">Sales</span>
                </template>
            </MenuTile>
        </div>
    </div>
</template>

<script setup>
import MenuTile from '../components/MenuTile.vue';
import IconHolder from '../components/IconHolder.vue';
import DashBoardIcon from '../components/icons/DashboardIcon.vue';
import Filter from '../components/icons/Filter.vue';
import Case from './icons/Case.vue';
import Calendar from './icons/Calendar.vue';
import Mail from './icons/Mail.vue';
import Plus from './icons/Plus.vue';
import Bell from './icons/BellIcon.vue';
import Sale from './icons/SalesIcon.vue';
</script>

<style scoped>
.menutile {
    margin-bottom: 10px;
    cursor: pointer;
}

.menutile:last-child {
    margin-bottom: 0;
}

.menutile .icon,
.menutile .title {
    scale: 0.9;
}
.title{
    color: #788CA6;
}

.icon{
    fill: #788CA6
}
.menutile:hover .icon,
.menutile:hover .title {
    fill: white;

    /* stroke: white; */
    transition-duration: 300ms;
    color: white;
    scale: 1.0;
}

.menutile:hover {
    /* box-shadow: 0px 4px #788CA6; */
}
</style>
