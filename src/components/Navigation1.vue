<template>
  <nav
    class="
      bg-[#0F0F0F]
      w-full
      max-w-[350px]
      h-[100vh]
      flex flex-col
      justify-between
      py-[76px]
      px-[47px]
      fixed
    "
  >
    <div class="flex flex-col text-white">
      <div class=""><Logo /></div>
      <div>
        <a href="#"
          ><span>
            <Home1 />
          </span>
          Home</a
        >
        <a href="#"
          ><span>
            <Account />
          </span>
          Account</a
        >
        <a class="active" href=""
          ><span>
            <Card />
          </span>
          Cards</a
        >
        <a href=""
          ><span>
            <Payment />
          </span>
          Payment</a
        >
        <a href=""
          ><span>
            <Teams />
          </span>
          Teams</a
        >
        <a href=""
          ><span> <Setting /> </span>Settings</a
        >
        <a href=""
          ><span> <Help /> </span>Helps</a
        >
        <a href=""
          ><span>
            <Logout />
          </span>
          Log Out</a
        >
      </div>
    </div>
    <div>
      <div class="flex gap-[18px]">
        <div>
          <Human />
        </div>
        <div class="flex flex-col">
          <h1 class="text-[#FFFFFF]">Ifeoma Ogboh</h1>
          <small class="text-[#888181]">joyogboh@gmail.com</small>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Home1 from "./icons/Home.vue";
import Account from "./icons/Account.vue";
import Card from "./icons/Card.vue";
import Logout from "./icons/Logout.vue";
import Help from "./icons/Help.vue";
import Setting from "./icons/Setting.vue";
import Teams from "./icons/Teams.vue";
import Payment from "./icons/Payment.vue";
import Logo from "./icons/Logo.vue";
import Human from "./icons/Human.vue";
</script>

<style scoped>
a {
  display: flex;
  gap: 2rem;
  margin: 12px 0;
  padding: 13px;
  width: 100%;
  align-items: center;
}

.active {
  background-color: #505724;
}

a:hover {
  background-color: #505724;
}
nav {
  font-family: Inter;
  font-size: 22px;
  font-weight: 500;
}
small {
  font-size: 16px;
}
</style>
