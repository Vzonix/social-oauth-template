<template>
  <div class="hello">
    <button @click="AuthProvider('google')">auth Google</button>
  </div>
</template>

<script>
export default {
  methods: {
    AuthProvider(provider) {
      let self = this;

      this.$auth
        .authenticate(provider)
        .then((response) => {
          self.SocialLogin(provider, response);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    SocialLogin(provider, response) {
      console.log(response);
      this.$http
        .post("/sociallogin/" + provider, response)
        .then((response) => {
          console.log(response);
          console.log(response.data);
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
