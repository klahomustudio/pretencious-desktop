<template>
  <div
    class="outer"
    :style="`border-radius: ${outerSize};width: ${outerSize}; height: ${outerSize};`"
  >
    <svg height="100%" width="100%" class="inner">
      <circle cx="50%" cy="50%" :r="`${innerSize}`" class="circle"></circle>
    </svg>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    outerSize: {
      type: String,
      required: true,
    },
    innerSize: {
      type: Number,
      default: 100,
    },
  },
});
</script>
<style scoped>
.outer {
  transform: rotate(0deg);
  animation-name: circle;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 4px rgb(36, 36, 36);
}

.circle {
  fill: var(--black);
  stroke: var(--primary);
  stroke-width: 15px;
  stroke-dasharray: 2, 6;
  stroke-linecap: butt;
}

@keyframes circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
