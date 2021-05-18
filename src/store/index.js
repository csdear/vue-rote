import Vue from "vue";
import Vuex from "vuex";
import counter from './modules/counter';
import form from './modules/form';
//[modules_refactor1] axios import moved to discrete modules files
//import axios from 'axios'  //11.[mawd] import axios

//[modules_refactor2] use vuex
Vue.use(Vuex);

//[modules_refactor3] use vuex persistence if needed. see adt web partners project.

export default new Vuex.Store({
  modules: {
    counter,
    form,
  }
});
