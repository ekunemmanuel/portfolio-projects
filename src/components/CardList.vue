<template>
  <div class="flex flex-col">
    <div
      class="
        flex
        justify-between
        items-center
        border-b-[1px]
        pl-[36px]
        pb-[36px]
        border-[#c0c0c0]
      "
    >
      <h1 class="header">Card list</h1>
      <div class="flex gap-[46px] items-center mr-[42px]">
        <Menu />
        <Plus />
      </div>
    </div>
    <div class="border-b-[1px] btn flex justify-between border-[#c0c0c0]">
      <div class="pl-[36px] py-[32px]">
        <h1 class="title">Basic Corporate</h1>
        <p class="active"><span class="dot" /> Active</p>
        <p class="access">Issued access <span class="number">3</span></p>
      </div>
      <div
        class="
          card
          flex
          gap-[12px]
          pr-[22px]
          pl-[36px]
          pb-[18px]
          pt-[54px]
          rounded-tl-[20px]
          border-[0.7px] border-white border-b-0
          self-end
          items-center
        "
      >
        3333 <Mastercard />
      </div>
    </div>
    <div
      class="border-b-[1px] btn flex justify-between border-[#c0c0c0] "
    >
      <div class="pl-[36px] py-[32px]">
        <h1 class="title">Inventory Card</h1>
        <p class="active"><span class="dot" /> Active</p>
        <p class="access">Issued access <span class="number">2</span></p>
      </div>
      <div
        class="
          card
          flex
          gap-[12px]
          pr-[22px]
          pl-[36px]
          pb-[18px]
          pt-[54px]
          rounded-tl-[20px]
          border-[0.7px] border-white border-b-0
          self-end
          items-center
        "
      >
        3333 <Mastercard />
      </div>
    </div>
    <div class="border-b-[1px] btn flex justify-between border-[#c0c0c0] selected">
      <div class="pl-[36px] py-[32px]">
        <h1 class="title">Software Subscriptions</h1>
        <p class="active"><span class="dot" /> Active</p>
        <p class="access">Issued access <span class="number">3</span></p>
      </div>
      <div
        class="
          card
          flex
          gap-[12px]
          pr-[22px]
          pl-[36px]
          pb-[18px]
          pt-[54px]
          rounded-tl-[20px]
          border-[0.7px] border-white border-b-0
          self-end
          items-center
        "
      >
        3333 <Mastercard />
      </div>
    </div>
    <div class="border-b-[1px] btn flex justify-between border-[#c0c0c0]">
      <div class="pl-[36px] py-[32px]">
        <h1 class="title">Travelling Card</h1>
        <p class="active"><span class="dot" /> Active</p>
        <p class="access">Issued access <span class="number">1</span></p>
      </div>
      <div
        class="
          card
          flex
          gap-[12px]
          pr-[22px]
          pl-[36px]
          pb-[18px]
          pt-[54px]
          rounded-tl-[20px]
          border-[0.7px] border-white border-b-0
          self-end
          items-center
        "
      >
        3333 <Mastercard class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./icons/Menu.vue";
import Plus from "./icons/Plus.vue";
import Card from "./icons/Card.vue";
import Mastercard from "./icons/Mastercard.vue";
export default { components: { Menu, Plus, Card, Mastercard } };
</script>

<style scoped>
.btn {
  transition: all 0.2s;
}
.header {
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
}
.title {
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #0d0d0de5;
}
.dot {
  height: 10px;
  width: 10px;
  border-radius: 99999999px;
  display: inline-block;
  background-color: #6c7a15;
}
.active {
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #000000cf;
  text-transform: uppercase;
}
.access {
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}
.number {
  height: 25px;
  width: 25px;
  border-radius: 7px;
  background: #e5e5e5;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  color: #000000cf;
}

.card {
  font-family: Inter;
  font-size: 22px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  background-color: #fff;
}
.selected,
.btn:hover {
  background: #505724;
  cursor: pointer;
}

.selected .title,
.btn:hover .title,
.selected .dot,
.btn:hover .dot,
.selected .access,
.btn:hover .access,
.selected .active,
.btn:hover .active,
.selected .card,
.btn:hover .card {
  color: #ffffff;
}
.selected .number,
.btn:hover .number {
  background-color: #e5e5e533;
}
.selected .card,
.btn:hover .card {
  background: transparent;
}

</style>