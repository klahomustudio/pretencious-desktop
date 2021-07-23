<template>
  <div class="system-bar">
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
  background: white;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.app-actions {
  float: right;
}
.btn {
  background: transparent;
  border: 0;
}
.btn:hover {
  background: rgba(200, 200, 200, 0.3);
}
.close:hover {
  background: red;
}
.resize > img {
  width: 18px;
}
.resize {
  width: 36px;
}
.close > svg > path {
  fill: #bfbfbf;
}
.close:hover > svg > path {
  fill: #f2f2f2;
}
</style>
