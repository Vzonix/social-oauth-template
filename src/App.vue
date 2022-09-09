<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SocialOauth />
  </div>
</template>

<script>
import SocialOauth from "./components/SocialOauth.vue";

export default {
  name: "App",
  components: {
    SocialOauth,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
