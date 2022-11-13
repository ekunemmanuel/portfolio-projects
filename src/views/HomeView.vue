<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import leaflet from "leaflet";
import IpInfo from "../components/IpInfo.vue";
import axios from "axios";
const ip = ref("");
const Ipinfo = ref(null);
const location = ref(null);
let myMap;

onMounted(() => {
  myMap = leaflet.map("map").setView([6.671741, 3.152513], 13);
  leaflet.marker([6.671741, 3.152513]).addTo(myMap);
  leaflet
    .tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGFibG9kYWxwaGEiLCJhIjoiY2wxaGN5dGZtMDNuNjNjcWx2ZHJ6bmMzbSJ9.lzihlzjJGb0E_B0viYNQyw",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoicGFibG9kYWxwaGEiLCJhIjoiY2wxaGN5dGZtMDNuNjNjcWx2ZHJ6bmMzbSJ9.lzihlzjJGb0E_B0viYNQyw",
      }
    )
    .addTo(myMap);
});
const getIpInfo = async () => {
  try {
    const { data } = await axios.get(
      `http://ip-api.com/json/${ip.value}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
    );
    ip.value = "";
    Ipinfo.value = [
      {
        title: "IP address",
        info: data.query,
      },
      {
        title: "Location",
        info: data.city,
      },
      {
        title: "Timezone",
        info: `UTC ${data.timezone}`,
      },
      {
        title: "ISP",
        info: data.isp,
      },
    ];
    location.value = {
      lat: data.lat,
      lon: data.lon,
    };
    leaflet.marker([location.value.lat, location.value.lon]).addTo(myMap);
    myMap.setView([location.value.lat, location.value.lon], 13);
  } catch (error) {
    alert(error);
  }
};
</script>

<template>
  <main>
    <div class="flex bg-[#494444] flex-col h-screen max-h-screen">
      <!-- search / result -->
      <div
        class="z-20 mt-[3rem] flex justify-center bg-[hsla(5,87%,31%,0)] relative px-[1rem] pt-8 pb-32"
      >
        <!-- search -->
        <div class="w-full max-w-screen-sm">
          <h1 class="text-white text-center text-3xl pb-4">
            Ip Address Tracker
          </h1>
          <div class="flex">
            <input
              @keyup.enter="getIpInfo"
              type="text"
              v-model="ip"
              class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md outline-[0]"
              placeholder="Search for any IP address or leave empty to get your ip address info"
            />
            <div @click="getIpInfo">
              <i
                class="fa-solid fa-angles-right cursor-pointer text-white bg-black px-4 py-4 rounded-tr-md flex items-center rounded-br-md"
              ></i>
            </div>
          </div>
        </div>
        <!-- info -->
        <IpInfo v-if="Ipinfo" :ipInfo="Ipinfo" />
      </div>

      <div id="map" class="h-full z-10"></div>
    </div>
  </main>
</template>
