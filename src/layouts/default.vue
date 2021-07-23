<template>
  <system-bar />
  <div class="app">
    <button @click="openDevTools">F12</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import SystemBar from "@/components/Layout/SystemBar.vue";
import { ipcRenderer } from "electron";
export default {
  components: {
    SystemBar,
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
  overflow: auto
}
</style>
