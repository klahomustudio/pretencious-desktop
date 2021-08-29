<template>
  <div class="nav-bar">
    <div class="user" />
    <ul class="nab-items">
      <li>
        <router-link to="/dashboard">
          <div class="icon center">
            <img src="@/assets/ia.png" />
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard">
          <div class="icon center">
            <img src="@/assets/control.png" />
          </div>
        </router-link>
      </li>
    </ul>
    <button class="center logout" @click="$router.push({ path: '/login' })">
      <img src="@/assets/logout.png" />
    </button>
  </div>
</template>
<style scoped>
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 60px;
  border-radius: 20px 20px 0 0;
  height: 90vh;
  width: 50px;
  padding: 10px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 15px rgb(77, 77, 77);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 50px;
  background-image: url(../../assets/user-image.jpg);
  background-repeat: no-repeat;
  background-size: 200px;
  background-position-y: -40px;
  box-shadow: 0 0 10px 2px #ccc;
  transition: 0.2s;
}

.user:hover {
  background-position-x: -10px;
  box-shadow: 0 0 10px 8px #ccc;
}

ul {
  list-style: none;
  margin-block: 0;
  padding: 0;
}

.icon {
  border-radius: 35px;
  padding: 7px;
  margin-bottom: 10px;
  transition: 0.2s;
}

.icon > img {
  width: 30px;
}

.icon:hover {
  box-shadow: 0 0 10px 8px #ccc;
}

.logout {
  position: absolute;
  bottom: 0;
  background: white;
  border: none;
  padding-left: 10px;
  border-radius: 35px;
  padding: 7px;
  padding-left: 10px;
  margin-bottom: 10px;
  transition: 0.2s;
  height: 47px;
}
.logout:hover {
  box-shadow: 0 0 10px 8px #ccc;
}
.logout > img {
  width: 30px;
}
</style>
