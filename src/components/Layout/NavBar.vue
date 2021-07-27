<template>
  <div class="nav-bar">
    <img src="" alt="logo" />
    <ul class="nab-items">
      <li>
        <router-link to="/dashboard">
          <img src="@/assets/ia.png" class="icon" />
        </router-link>
      </li>
      <li>
        <router-link to="/todo"> TODO </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 50px;
  height: 100vh;
  width: 50px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 15px rgb(77, 77, 77);
}
.nav-bar {
  list-style: none;
  margin-block: 0;
  padding: 0;
}
.nab-items > li {
}
.icon {
  width: 30px;
}
</style>
