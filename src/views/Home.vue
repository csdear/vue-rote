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
    <div id="computedExample">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <div>
      <b-input
              :value="getFullName"
              @change="validateEmail($event)"
              @input="$emit('input', $event)"
              ref="input"
            /><!--:state="state"-->
    </div>
    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
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
import axios from 'axios'
import _ from 'lodash';




export default {
  //inline JS with data()
  data() {
    return {
      helloTwo: console.log('INLINE HEY'),
      message: 'hello',
      firstName: 'Stuart',
      lastName: 'Dear',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
      //helloThree: myScript
      //5.[mawd] "DELETED". We can move counter to STATE.
      //counter: 0,
    }
  },
  computed: {
  reversedMessage() {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
  },
  getFullName() {
      return this.firstName + ' ' + this.lastName
  },
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      console.log('old question', oldQuestion);
      console.log('new questions', newQuestion);
      this.debouncedGetAnswer()
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
    onKeyListener($event) {
        // We've overriden the default "complete" slot so
        // we need to implement the "keyup" listener manually.
        console.log($event);
        if ($event.key === 'Enter') {
          console.log('user did Enter key');
          // this.onSendData()
        }
      },
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },
  created () {
    console.log('home created()');
    document.addEventListener('keyup', this.onKeyListener)
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
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
