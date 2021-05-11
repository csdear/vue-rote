<template>
  <div class="home">
    <h1 class="animate__heartBeat" :style="{color:'green','font-weight':'bold'}" >VUE ROTE</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <b-button variant="success">Hello Bootstrap-vue</b-button>

    <counter />
    <counter-squared />
    <counter-buttons />
    <color-code />


    <!--child component with prop-->
    <HelloWorld msg="I am the msg prop passed from parent home.vue <br> to child HelloWorld." />
  </div>
</template>


<script>
//Bringing in a external component
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// <!--15.2[mawd] not using imports, using required instead so these are no longer needed
// import CounterSquared from '../components/CounterSquared.vue';
// import ColorCode from '../components/ColorCode.vue';

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
    // <!--15.2[mawd] require the child components
    HelloWorld,
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default,
    'counter-buttons': require('@/components/CounterButtons.vue').default,
    'color-code': require('@/components/ColorCode.vue').default
  }
};
</script
    ColorCode>

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
