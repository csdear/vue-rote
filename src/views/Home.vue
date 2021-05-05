<template>
  <div class="home">
    <h1 class="animate__heartBeat" :style="{color:'green','font-weight':'bold'}" >VUE ROTE</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <b-button variant="success">Hello Bootstrap-vue</b-button>

    <!--MAWD vuex tutorial-->
    <!--1.[mawd] create a counter and buttons-->
    <!--2,[mawd] refactored to bring in counter data prop <div class="counter">0</div> -->
    <!--6.[mawd] <div class="counter">{{ counter }}</div> Now, we are accessing counter directly from state -->
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="buttons">
      <!--4.counter method click handlers -->
        <!-- <b-button @click="decreaseCounter" variant="success">-</b-button>
        <b-button @click="increaseCounter" variant="success">+</b-button> -->
      <!--8.[mawd] update button click handlers to commit to state mutations. -->
        <!-- <b-button @click="$store.commit('decreaseCounter')" variant="success">-</b-button>
        <b-button @click="$store.commit('increaseCounter')" variant="success">+</b-button> -->
      <!--10.[mawd] Dispatch TestDispatch method instead of commit method. Test, will console.log if it hits action. (actions) . -->
      <b-button @click="$store.dispatch('increaseCounter')" variant="success">+</b-button>
    </div>

    <!--child component with prop-->
    <HelloWorld msg="I am the msg prop passed from parent home.vue <br> to child HelloWorld." />
  </div>
</template>


<script>
//Bringing in a external component
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

// how to bring in a external javascript file
// on page load, this fires a script, hey.js, which contains a ssimple alert.
  // import heyScript from "@/components/hey.js";

//could also do it like this
  //var myScript = require('@/components/hey.js');

export default {
  //inline JS with data()
  data() {
    return {
      helloTwo: console.log('INLINE HEY'),
      //helloThree: myScript
      //5.[mawd] "DELETED". We can move counter to STATE.
      //counter: 0,
    }
  },
  methods: {
    //3.[mawd] counter methods
    //4.[mawd] these methods and associated data() will be moved to the vuex store
    //7.[mawd] "DELETE" local methods, moving them to store.
    // increaseCounter() {
    //   this.counter++
    // },
    // decreaseCounter() {
    //   this.counter--
    // }
  },
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
/* 2. [mawd] counter/button styles */
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 40px;
}

.buttons button {
  font-size: 30px;
  width: 100px;
  margin: 0 10px;
}

</style>
