<template>
  <div class="body">
    <div @click="close" v-if="status" class="modal-background">
      <div class="modal-container">
        <h1>Success</h1>
        <h1>{{ user.name }}</h1>
        <button @click="close">Close</button>
      </div>
    </div>
    <div class="login">
      <div class="contained">
        <div class="header">
          <div class="logo">
            <div>
              <h1>CF</h1>
            </div>
          </div>
          <h1>Welcome to Connectify</h1>
          <p>Sign in to continue</p>
        </div>

        <form @submit.prevent="send">
          <div class="input">
            <input type="email" v-model="user.name" placeholder="Email" />
            <input type="password" v-model="user.password" autocomplete="true" placeholder="Password" />
            <p>Forgot Password?</p>
            <button>Sign in</button>
          </div>
        </form>

        <div class="relative">
          <div>
            <p>or</p>
          </div>
          <hr class="spacer" />
        </div>

        <div class="orders">
          <button>
            <IconGoogle class="icon" /> Login with Google
          </button>
          <button>
            <IconFacebook class="icon" />Login with Facebook
          </button>
        </div>
        <div class="footer">
          <p>Don't have an account? <b>Register</b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconGoogle from "../components/icons/IconGoogle.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";

import { ref } from "@vue/reactivity";
const status = ref<boolean>(false);
const user = ref({
  name: "",
  password: "",
});
const close = () => {
  status.value = false;
  user.value.name = "";
  user.value.password = "";
};

const send = () => {
  if (user.value.name.length > 0 && user.value.password.length > 0) {
    status.value = true;
  }
};
</script>

<style scoped>
.body {
  background-color: #181818;
  /* height: calc(100vh - 3rem); */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-background {
  background-color: #0000006e;
  position: absolute;
  top: -50px;
  width: 100%;
  height: 100vh;
  z-index: 30;
  padding: 1rem;
  display: flex;
}

.modal-background .modal-container {
  margin: auto;
  padding: 3rem;
  min-width: 450px;
  max-width: max-content;
  width: 100%;
  background-color: rgb(72, 255, 0);
  border-radius: 1rem;
}

.modal-background .modal-container h1 {
  text-align: center;
  color: #000;
}

.modal-background .modal-container button {
  padding: 0.8rem;
  font-size: 18px;
  outline: none;
  width: 100%;
  border: none;
  color: #fff;
  background-color: rgb(216, 66, 29);
  border-radius: 0.5rem;
}

.modal-background .modal-container button:hover {

  color: #fff;
  background-color: rgb(87, 82, 82);
}

.login {
  max-width: 1280px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;
}

.contained {
  margin: 0 auto;
  display: grid;
  max-width: 450px;
  padding: 1rem;
  gap: 1rem;
}

.header {
  max-width: 400px;
  text-align: center;
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;
}

.header .logo {
  max-width: 250px;
  min-height: 150px;
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
}

.header .logo h1 {
  width: 100%;
  height: 100%;
  font-size: 50px !important;
  padding: 1rem 1rem 1rem 1rem;
  background-color: #fff;
  border-radius: 0.62rem;
  color: #181818;
  font-style: italic;
  font-weight: 800;
  text-align: center;
}

.contained .input,
.contained .orders {
  width: 100%;
  display: grid;
  gap: 0.8rem;
}

.contained .input input,
.contained .input button,
.contained .orders button {
  padding: 0.8rem;
  font-size: 20px;
  outline: none;
  border: none;
  border-radius: 0.5rem;
}

.relative {
  position: relative;
}

.relative .spacer {
  margin: 2rem auto 2rem auto;
  width: 90%;
}

.relative div {
  position: absolute;
  left: 50%;
  height: 100%;
  width: max-content;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
  z-index: 1;
}

.relative div p {
  background-color: #181818;
  padding: 7px;
  text-transform: uppercase;
}

.contained .input p {
  text-align: right;
  font-weight: 800;
  cursor: pointer;
}

.contained .input button,
.contained .orders button {
  background-color: rgb(73, 62, 1);
  color: white;
  transition: all 0.4s ease-in-out;
}

.contained .orders button {
  text-align: left;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0.61rem;
}

.contained .orders button .icon {
  width: 30px;
  height: 30px;
}

.contained .input button:hover,
.contained .orders button:hover {
  background-color: white;
  color: black;
}

.contained .footer {
  margin: 1rem auto 0;
}

.contained .footer b {
  font-weight: 800;
  cursor: pointer;
}
</style>
