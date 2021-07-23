<template>
  <div class="home">
    <img alt="Vue logo" class="logo-drag" src="../assets/logo.png" />
    <HelloWorld
      class="logo-drag"
      msg="Welcome to Your Vue.js + TypeScript App"
    />
    <button @click="close">aahhhhhhhh close</button>
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { ipcRenderer } from "electron";

export default {
  components: {
    HelloWorld,
  },
  methods: {
    close(): void {
      return ipcRenderer.send("closeApp");
    },
  },
};
</script>

<style scoped></style>
