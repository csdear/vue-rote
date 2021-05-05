import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //WHERE  ALL THE DATA IS STORE. MOVE DATA() PROPS LIKE 'COUNTER' HERE
    //5.[mawd] counter refactored to state here.
    counter: 0
  },
  mutations: {
    //METHODS THAT CHANGE DATA IN THE STATE^
    //WE CHANGE STATE BY COMMITTING. MUTATIONS FOR INCREASE/DECREASE 'COUNTER'
    // WILL BE DEFINED HERE.  NO ASYNC
    //7.[mawd] In order to access COUNTER in a mutation, we dont use this.counter. Instead we pass in the state to the mutation as a param. Then it becomes state.counter
    increaseCounter(state) {
      state.counter++
    },
    decreaseCounter(state) {
      state.counter--
    }
  },
  actions: {
    //Can't change data in the STATE, but can ACCESS data in the state.
    // ASYNC COOL.
    //9.[mawd] action dispatch to mutation
    increaseCounter() {
      console.log('increaseCounter (action)');
    }
  },
  getters: {
    //ALLOWS US TO GET DATA FROM STATE. CAN JUST GET DATA FROM STATE, BUT
    // GETTERS ALLOW US TO FILTER OR CHANGE DATA BEFORE IT IS GIVEN TO OUR
    //COMPONENTS.
  },
  modules: {
    //BREAK UP STORE INTO MULTIPLE MODULES. EG ADT, Events,Locations, Users
    //etc., each having their own store/state file.
  }
});
