import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";
import VueSocialauth from "vue-social-auth";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId: "",
      redirectUri: "/index.html", // Your client app URL
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
