<template>
  <main>
    <div class="flex justify-center items-center body mobile">
      <div>
        <div class="flex justify-center w-full items-center h-[10rem]">
          <img src="../assets/images/logo.svg" alt="" />
        </div>
        <form @click.prevent class="">
          <div class="calculator flex gap-[2rem]">
            <!-- inputs -->
            <div class="flex flex-col w-full gap-[2rem]">
              <div class="flex flex-col gap-[.7rem]">
                <label for="bill">Bill</label>
                <div class="relative">
                  <input
                    @input="customs"
                    placeholder="0"
                    v-model="bill"
                    type="number"
                    id="bill"
                    class="!pl-[2rem]"
                  />
                  <div class="absolute top-[35%] left-[1rem]">
                    <img src="../assets/images/icon-dollar.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-[.7rem]">
                <label for="bill">Select Tip %</label>
                <div class="grid tips">
                  <button value="0.05" @click="tipping">5%</button>
                  <button value="0.1" @click="tipping">10%</button>
                  <button value="0.15" @click="tipping">15%</button>
                  <button value="0.25" @click="tipping">25%</button>
                  <button value="0.5" @click="tipping">50%</button>
                  <input
                    class="w-[100%] custom"
                    @input="customs"
                    v-model="custom"
                    placeholder="Custom"
                    type="number"
                    name="bill"
                    id="custom"
                  />
                </div>
              </div>
              <div class="flex flex-col gap-[.7rem]">
                <div class="flex justify-between">
                  <label for="people">Number of People</label>
                  <label
                    v-if="error"
                    for="error"
                    :class="error && people <= 0 ? 'error' : 'hidden'"
                    class="!outline-0"
                    >Can't be zero</label
                  >
                </div>
                <div class="relative">
                  <input
                    @input="customs"
                    :class="
                      error && people <= 0
                        ? 'error'
                        : 'outline-[hsl(172, 67%, 45%)]'
                    "
                    v-model="people"
                    placeholder="0"
                    type="number"
                    id="people"
                    class="!pl-[2rem]"
                  />
                  <div class="absolute top-[35%] left-[1rem]">
                    <img src="../assets/images/icon-person.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <!-- amount -->
            <div class="flex amount flex-col w-full gap-[1rem]">
              <div class="flex justify-between">
                <div class="flex flex-col">
                  <label class="w-max">Tip Amount</label>
                  <label>/ person</label>
                </div>
                <h1 class="amountText">${{ tip.toFixed(2) }}</h1>
              </div>
              <div class="flex justify-between">
                <div class="flex flex-col">
                  <label>Total</label>
                  <label>/ person</label>
                </div>
                <h1 class="amountText">${{ total.toFixed(2) }}</h1>
              </div>

              <div class="flex flex-1 flex-col gap-[.7rem]">
                <button
                  @click="reset"
                  class="absolute bottom-0 w-full uppercase"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      bill: null,
      people: null,
      custom: null,
      error: false,
      tip: 0.0,
      total: 0.0,
      customTimeout: null,
    };
  },
  created() {
    const favicon = document.getElementById("favicon");
    favicon.href = "/favicon2.png";
  },
  methods: {
    reset() {
      this.bill = null;
      this.people = null;
      this.error = false;
      this.custom = null;
      this.tip = 0.0;
      this.total = 0.0;
    },
    tipping(e) {
      const result = this.bill * e.target.value;
      if (this.people <= 0) {
        return (this.error = true);
      }
      const tips = result / this.people;
      this.tip = tips;
      const result2 = this.bill / this.people;
      const totals = tips + result2;
      this.total = totals;
      this.error = false;
    },
    customs() {
      clearTimeout(this.customTimeout);
      this.customTimeout = setTimeout(() => {
        if (this.custom !== null) {
          const customResult = (this.bill * this.custom) / 100;
          if (this.people <= 0) {
            return (this.error = true);
          }
          const customTips = customResult / this.people;
          this.tip = customTips;
          const customResult2 = this.bill / this.people;
          const customTotals = customTips + customResult2;
          this.total = customTotals;
          this.error = false;
        }
      }, 200);
    },
  },
};
</script>

<style>
@import url("../assets/calculate.css");
.calculator {
  background-color: var(--calculator-bg);
  max-width: 1440px;
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: rgba(30, 31, 31, 0.199) 0px 20px 25px -5px,
    rgba(184, 8, 8, 0.04) 0px 10px 10px -5px;
}
.calculator label {
  font-weight: 700 !important;
}
.calculator input {
  background-color: var(--input-bg) !important;
  font-size: var(--input-font-size) !important;
  color: var(--calcultor-btn) !important;
  padding: 0.5rem 1rem;
  outline-color: var(--amount-color);
  font-weight: 700 !important;
  text-align: right;
  border-radius: 0.5rem;
  font-size: 25px !important;
  outline-width: 2px;
  width: 100%;
}

.calculator .error {
  outline: red solid 2px;
  color: red;
}
.calculator .tips {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}
.calculator button {
  background-color: var(--calcultor-btn) !important;
  padding: 1rem !important;
  border-radius: 0.5rem;
  color: var(--input-bg) !important;
  font-weight: 700;
  font-size: 25px !important;
}
.calculator button:last-child {
  background-color: var(--input-bg) !important;
  color: var(--text-color) !important;
}
.calculator button:hover {
  color: var(--calcultor-btn) !important;
  background-color: var(--amount-color) !important;
}
.custom::placeholder {
  text-align: center;
}
.amount {
  background-color: var(--calcultor-btn) !important;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
}
.amount label {
  color: var(--input-bg) !important;
}
.amount label:last-child {
  color: var(--amount-color) !important;
  font-size: 12px;
}
.amount .amountText {
  color: var(--amount-color);
  font-weight: 700;
  font-size: var(--amount-font-size) !important;
}

@media screen and (max-width: 730px) {
  .mobile {
    align-items: flex-end !important;
  }
  .calculator {
    max-width: 375px;
    flex-direction: column;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .calculator input {
    background-color: var(--input-bg) !important;
    font-size: var(--input-font-size) !important;
    color: var(--calcultor-btn) !important;
    padding: 0.3rem 1rem;
    outline-color: var(--amount-color);
    font-weight: 700 !important;
    text-align: right;
    border-radius: 0.5rem;
    font-size: 25px !important;
    outline-width: 2px;
    width: 100%;
  }
  .calculator .tips {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    /* margin: 0 0 1rem 0; */
  }
  .calculator button {
    padding: 0 !important;
  }
  .amount {
    padding: 1.5rem;
    padding-top: 3rem;
  }
  .amount button {
    position: static;
    font-size: 20px !important;
    padding: 0.3rem !important;
    margin-top: 1rem !important;
  }
  .amount .amountText {
    color: var(--amount-color);
    font-weight: 700;
    font-size: 32px !important;
  }
}
</style>
