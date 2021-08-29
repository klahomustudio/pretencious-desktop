<template>
  <system-bar
    @close="closeApp"
    @minimize="minimize"
    @resize="resize"
    @openDevTools="openDevTools"
  />
  <div class="app">
    <nav-bar v-if="show" />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import SystemBar from "@/components/Layout/SystemBar.vue";
import NavBar from "@/components/Layout/NavBar.vue";
import { ipcRenderer } from "electron";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    SystemBar,
    NavBar,
  },
  computed: {
    show() {
      const currentRoute = this.$router.currentRoute.value.name;
      if (currentRoute === "Login") {
        return false;
      }
      return true;
    },
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
});
</script>

<style scoped>
.app {
  /* make this responsive */
  max-height: 90vh;
  padding-top: 30px;
  overflow: auto;
}
.content {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80vw;
}
</style>
