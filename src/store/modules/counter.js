import axios from 'axios'  //[modules_recfactor1]


//[modules_refactor4] prior was in index.js. refactored to here.
//[modules_refactor5] update formatting
const state = {
    //WHERE  ALL THE DATA IS STORE. MOVE DATA() PROPS LIKE 'COUNTER' HERE
    //5.[mawd] counter refactored to state here.
    counter: 0,
    //14.2 add colorCode property to state
    colorCode: 'red'
  }

  const mutations = {
    //METHODS THAT CHANGE DATA IN THE STATE^
    //WE CHANGE STATE BY COMMITTING. MUTATIONS FOR INCREASE/DECREASE 'COUNTER'
    // WILL BE DEFINED HERE.  NO ASYNC
    //7.[mawd] In order to access COUNTER in a mutation, we dont use this.counter. Instead we pass in the state to the mutation as a param. Then it becomes state.counter
    // increaseCounter(state) {
    //12.3[mawd] add p2, to receive payload from action.
    increaseCounter(state, randomNumber) {
      // state.counter++
      console.log('randomNumber:', randomNumber);
      //12.4[mawd] increment state counter object
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      // state.counter--
      state.counter -= randomNumber
    },
    //14.10[mawd] mutation. p1: state. p2: payload recd
    setColorCode(state, newValue) {
      state.colorCode = newValue

    }
  }

  const actions = {
    //Can't change data in the STATE, but can ACCESS data in the state.
    // ASYNC COOL.
    //9.[mawd] action dispatch to mutation
    // increaseCounter() {
    //12.1[mawd] pass in commit to get access to the mutation.
    increaseCounter({ commit }) {
      console.log('increaseCounter (action)');
      //11.[mawd] make axios call to random api
      axios('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new').then(response => {
        // console.log('axios response :', response)
      //12.2[mawd] commit to mutation increaseCounter. p1: mutation name. p2: payload
      commit('increaseCounter', response.data)
      });
    },
    decreaseCounter({ commit }) {
      console.log('decreaseCounter (action)');
      //11.[mawd] make axios call to random api
      axios('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new').then(response => {
      commit('decreaseCounter', response.data)
      });
    },
    //14.11[mawd] good practice to have a matching set of actions and mutations. p1: commit access to mutation. p2: payload
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    }
  };

  const getters = {
    //ALLOWS US TO GET DATA FROM STATE. CAN JUST GET DATA FROM STATE, BUT
    // GETTERS ALLOW US TO FILTER OR CHANGE DATA BEFORE IT IS GIVEN TO OUR
    //COMPONENTS.

    // 13.2 counter squared getter. access state. Getters just need to return something.
    // counterSquared(state) {
    //   return state.counter * state.counter //square the state.counter
    // },

    counterSquared: state => {
        return state.counter * state.counter;
    }
  };

  export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };

//   const counterModule = {
//     state,
//     mutations,
//     actions,
//     getters
//   }

//   export default counterModule;


