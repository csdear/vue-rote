<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="WIZARD X VUE Prop" />
  </div>
</template>


<script>
//Bringing in a external component
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

//bringing in a external javascript file
import heyScript from "@/components/hey.js";

//could also do it like this
  //var myScript = require('@/components/hey.js');

export default {
  //inline JS with data()
  data() {
    return {
      helloTwo: console.log('INLINE HEY'),
      //helloThree: myScript
    }
  },
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
