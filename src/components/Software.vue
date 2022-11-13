<template>
  <div>
    <div class="flex items-center justify-between mb-[58px]">
      <div>
        <div class="flex gap-[27px] items-center">
          <div class="bg-[#6C7A15DB] py-[10px] px-[10px]">
            <div class="bg-white p-[5px]"></div>
          </div>
          <h1 class="header">Software Subscriptions</h1>
        </div>
      </div>
      <div
        class="flex manage gap-6 items-center cursor-pointer p-5 border-[1px]"
      >
        Manage
        <span><Arrow /></span>
      </div>
    </div>
    <div class="border-b-[1px] pb-[39px] card flex items-center">
      <div class="border-r-[1px] pr-[32px] w-[60%]">
        <h1>CARD NUMBER</h1>
        <h2 class="flex gap-[24px] items-center">
          1234 1234 1234 1234 <span><Copy /></span>
        </h2>
      </div>
      <div class="border-r-[1px] px-[32px] w-[25%]">
        <h1>EXPIRY DATE</h1>
        <h2 class="flex gap-[10px] items-center">03/20</h2>
      </div>
      <div class="border-r-[1px] px-[32px] w-[25%]">
        <h1>CVV</h1>
        <h2 class="flex gap-[10px] items-center">
          <Star /> <Star /> <Star /> <span><Eye /></span>
        </h2>
      </div>
      <div class="text-right w-[25%]">
        <h1>STATUS</h1>
        <h2 class="">Virtual</h2>
      </div>
    </div>
    <div class="border-b-[1px] py-[19px] card flex items-center">
      <div class="pr-[32px] w-[60%] flex flex-col gap-[16px]">
        <h1 class="pb-[20px] limit">Spending limits</h1>
        <h2 class="!text-[#00000080]">DAILY TRANSACTION LIMIT</h2>
        <div class="w-full bg-[#818D360D] h-[20px]">
          <div class="w-[10%] bg-[#494F22] h-full"></div>
        </div>
        <div class="flex justify-between text-[#494F22] text-[20px]">
          <h3 class="">$199.00 spent of $2,000.00</h3>
          <span>10%</span>
        </div>
      </div>
      <div class="p-[42px] pr-[140px] w-[40%] relative bg-[#F9F9F5]">
        <h1>Estimated amount for this month:</h1>
        <h2 class="flex gap-[10px] items-center">$2,920.00</h2>
        <div
          class="
            absolute
            bg-[#494F221A]
            right-0
            bottom-0
            rounded-tl-full
            pt-[38px]
            pl-[46px]
            pb-[20px]
            pr-[20px]
            flex
            justify-center
            items-center
          "
        >
          <Arrow1 class="" />
        </div>
      </div>
    </div>
    <div class="border-b-[1px] py-[19px] card w-full">
      <h1 class="pb-[20px] limit">
        Issued access
        <span
          class="
            bg-[#E5E5E5]
            rounded-[7px]
            inline-block
            text-center
            w-[25px]
            h-[25px]
          "
          >3</span
        >
      </h1>
      <table class="w-full">
        <tr class="flex items-center justify-between">
          <td class="flex gap-4 items-center">
            <Human />
            <h1>Chidinma Ogboh</h1>
          </td>
          <td class="text-center">Shutterstock 350</td>
          <td class="flex gap-4 items-center">
            $1,649.00 / year <span><Arrow2 /></span>
          </td>
        </tr>
        <tr class="flex items-center my-4 justify-between">
          <td class="flex gap-4 items-center">
            <Human />
            <h1>Jonarose Chukilo</h1>
          </td>
          <td class="text-left">Webflow Business Pro</td>
          <td class="flex gap-4 items-center">
            $59.00 / month <span><Arrow2 /></span>
          </td>
        </tr>
        <tr class="flex items-center justify-between">
          <td class="flex gap-4 items-center">
            <Human />
            <h1>Feomzie Jonathan</h1>
          </td>
          <td>Adobe Spark Post Pro</td>
          <td class="flex gap-4 items-center">
            $23.00 / month <span><Arrow2 /></span>
          </td>
        </tr>
      </table>
    </div>
    <div class="pt-[19px] card w-full">
      <h1 class="pb-[20px] limit">Recent transactions</h1>
      <table class="w-full">
        <tr class="flex items-center justify-between">
          <td class="flex gap-4 items-center">
            <Dropbox class="bg-blue-500 rounded-full" />
            <h1>Dropbox</h1>
          </td>
          <td class="text-center">Apr 20, 2022</td>
          <td class="flex gap-4 items-center">
            -$299.00 <span><Arrow2 /></span>
          </td>
        </tr>
        <tr class="flex items-center my-4 justify-between">
          <td class="flex gap-4 items-center">
            <Zendesk class="bg-black rounded-full p-2" />
            <h1>Zendesk</h1>
          </td>
          <td class="text-left">Apr 15, 2022</td>
          <td class="flex gap-4 items-center">
            -$1490.00 <span><Arrow2 /></span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Arrow from "./icons/Arrow.vue";
import Copy from "./icons/Copy.vue";
import Star from "./icons/Star.vue";
import Eye from "./icons/Eye.vue";
import Arrow1 from "./icons/Arrow1.vue";
import Human from "./icons/Human.vue";
import Arrow2 from "./icons/Arrow2.vue";
import Dropbox from "./icons/Dropbox.vue";
import Zendesk from "./icons/Zendesk.vue";
export default {
  components: {
    Arrow,
    Copy,
    Star,
    Eye,
    Arrow1,
    Human,
    Arrow2,
    Dropbox,
    Zendesk,
  },
};
</script>

<style scoped>
.header {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #090808;
}
.manage {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: rgba(13, 13, 13, 0.9);
}
.card h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
}
.card h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(13, 13, 13, 0.9);
}
.limit {
  font-family: Inter;
  font-size: 22px !important;
  font-weight: 600 !important;
  line-height: 27px !important;
  color: #090808 !important;
}
</style>