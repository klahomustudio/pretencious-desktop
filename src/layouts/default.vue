<template>
  <system-bar
    @close="closeApp"
    @minimize="minimize"
    @resize="resize"
    @openDevTools="openDevTools"
  />
  <div class="app">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import SystemBar from "@/components/Layout/SystemBar.vue";
import NavBar from "@/components/Layout/NavBar.vue";
import { ipcRenderer } from "electron";
export default {
  components: {
    SystemBar,
    NavBar,
  },
  methods: {
    closeApp(): void {
      ipcRenderer.send("closeApp");
    },
    minimize(): void {
      ipcRenderer.send("minimizeApp");
    },
    resize(): void {
      ipcRenderer.send("resizeApp");
    },
    openDevTools(): void {
      ipcRenderer.send("openDevTools");
    },
  },
};
</script>

<style scoped>
.app {
  /* make this responsive */
  max-height: 90vh;
  padding-top: 30px;
  overflow: auto;
}
</style>
