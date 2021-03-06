import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import { router } from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.filter("currency", (value) => {
  return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits : 2}) + " $"
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
