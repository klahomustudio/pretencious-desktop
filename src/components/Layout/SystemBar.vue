<template>
  <div class="system-bar">
    <button @click="$emit('openDevTools')">F12</button>
    <div class="d-flex app-actions">
      <button class="btn minimize" @click="$emit('minimize')">
        <img alt="minus" src="@/assets/minus.svg" />
      </button>
      <button class="btn resize" @click="$emit('resize')">
        <img alt="resize" src="@/assets/resize.svg" />
      </button>
      <button class="btn close" @click="$emit('close')">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.system-bar {
  background: transparent;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  -webkit-app-region: drag;
}
.app-actions {
  float: right;
  -webkit-app-region: no-drag;
}
.btn {
  background: transparent;
  border: 0;
}
.btn:hover {
  background: rgba(100, 100, 100, 0.3);
}
.btn > img {
  width: 15px;
}
.btn {
  width: 36px;
}
.close > svg {
  width: 15px;
}
.close:hover {
  background: #c12a31;
}
.resize > img {
  width: 14px;
}
.close > svg > path {
  fill: #bfbfbf;
}
.close:hover > svg > path {
  fill: #f2f2f2;
}
</style>
