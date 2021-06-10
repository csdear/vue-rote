//1a
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"; //[modules_refactor6]
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import animate from 'animate.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(animate);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// console.log(`DATA : ${JSON.stringify(vm.$data)}`) vm instance properties and methods