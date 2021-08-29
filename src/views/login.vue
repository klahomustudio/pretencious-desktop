<template>
  <div class="container">
    <big-circle outerSize="480px" :innerSize="225" />
    <form @submit.prevent="login">
      <input
        v-model="name"
        type="text"
        placeholder="username"
        class="text user-input"
        valid-value
      />
      <input
        v-model="password"
        type="password"
        placeholder="password"
        class="text password-input"
        pattern=".{6,}"
        valid-value
      />
      <input type="submit" value="log in" class="submit-btn" />
    </form>
  </div>
</template>
<script lang="ts">
import BigCircle from "@/components/Shared/BigCircle.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  layout: {},
  components: {
    BigCircle,
  },
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("name: " + this.name, "password: " + this.password);
      this.$router.push({ name: "Home" });
    },
  },
});
</script>

<style scoped>
.container {
  position: fixed;
  right: 0;
  top: 100px;
  padding: 20px 0;
  z-index: 1;
  width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  width: 400px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 10px 0;
  border-radius: 30px;
  border: 0;
  padding: 8px;
  z-index: 1;
  text-align: center;
}

input:focus-visible {
  box-shadow: 0 0 3px 1px rgb(151, 151, 151);
  outline: none;
}

input::placeholder {
  letter-spacing: 2px;
}

.submit-btn {
  width: 200px;
  background-color: var(--primary);
  border: 0;
  border-radius: 20px;
  letter-spacing: 2px;
  transition: 0.2s;
  background-image: url(../assets/checkout.svg);
  background-repeat: no-repeat;
  background-size: 26px;
  background-position-x: 2px;
  background-position-y: 2px;
}
.submit-btn:hover {
  box-shadow: 0 0 3px 1px rgb(151, 151, 151);
}

.text {
  background-color: rgb(179, 179, 179);
  width: 270px;
  transition: 0.3s;
}

.text:focus-visible {
  background-color: #ddd;
}

.user-input {
  background-image: url(../assets/user.svg);
  background-repeat: no-repeat;
  background-size: 26px;
  background-position-x: 3px;
  background-position-y: 2px;
}
.password-input {
  background-image: url(../assets/password.svg);
  background-repeat: no-repeat;
  background-size: 26px;
  background-position-x: 3px;
  background-position-y: 2px;
}
</style>
