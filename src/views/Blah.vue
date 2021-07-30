<!--SINGLE FILE COMPONENT -->
<template>
<div class="blah">

  <!-- A. basic interpolation, populated by this data obj -->
  <h1>{{ greeting }} (same lvl interpolation)</h1>

  <!-- B. v-text alternative to interpolation, pop by this data obj.-->
  <HolaMundo v-text="greetingAlt" />

  <!-- Passing a prop to HolaMundo subcompt. -->
  <HolaMundo msg="Welcome (inline prop msg to SC" />
  <br>

  <h2>v-model directive</h2>
  <input v-model="name" placeholder="Your name">
  <p> Welcome to the party {{ name }}</p><br>
  <!--expression-->
  <p><span v-text="'So glad to have you, ' + name + ', with us today!'"> </span></p>


  <p> What does wikipedia says about (v-bind to html attribute)
    <a v-bind:href="'https://en.wikipedia.org/wiki/' + name ">your name</a>
  ?</p>
<br>
  <select v-model="selected">
      <option disabled value="">Choose a friend</option>
      <option>Randy</option>
      <option>Jason</option>
      <option>Kevin</option>
      <option>Jacob</option>
      <option>Joseph</option>
  </select>
  <span>Friend chosen: {{ selected }}</span>
  <!--expression:ternary operator-->
  <!-- <span v-text="name == Flavio ? 'Hi Flavio!' : 'Hi' + name + '!'"></span> -->
  <span v-text="selected == 'Joseph' ? 'Hello my friend and son, Joseph' : 'Hi' + name + '!'"></span>
  <br>
    <!--Bootstrap Mult Select Checkboxes -->
                  <b-dropdown ref="eatDropDown" id="dropdown-eat" text="Search Sub Categories" variant="primary">
                    <b-dropdown-form>
                        <div class="">
                            <b-form-checkbox id="Bakery" value="Bakery" v-model="eatSubList">Bakery</b-form-checkbox>
                            <b-form-checkbox id="Lounge" value="Lounge" v-model="eatSubList">Bar, Lounge, or Nightclub</b-form-checkbox>
                            <b-form-checkbox id="BreweryDistillery" value="BreweryDistillery" v-model="eatSubList">Brewery or Distillery</b-form-checkbox>
                            <b-form-checkbox id="CoffeeShop" value="CoffeeShop" v-model="eatSubList">Coffee Shop</b-form-checkbox>
                            <b-form-checkbox id="Deli" value="Deli" v-model="eatSubList">Deli</b-form-checkbox>
                            <b-form-checkbox id="DessertShop" value="DessertShop" v-model="eatSubList">DessertShop</b-form-checkbox>
                            <b-form-checkbox id="FoodTruck" value="FoodTruck" v-model="eatSubList">FoodTruck</b-form-checkbox>
                            <b-form-checkbox id="Restaurant" value="Restaurant" v-model="eatSubList">Restaurant</b-form-checkbox>
                            <b-form-checkbox id="Winery" value="Winery" v-model="eatSubList">Winery</b-form-checkbox>
                        </div>
                    </b-dropdown-form>
                    <h3>User selection(s) : {{ eatSubList }} </h3>
                </b-dropdown>
  <div id="loops">
    <h3>v-for loop</h3>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
      </ul>
    <h3>v-for loop w/ index</h3>
    <ul>
      <li v-for="(todo, index) in todos" v-text="todo.title" :key="index" ></li>
    </ul>

    </div>

  <div id="events">
      <p><b-button><a v-on:click="handleClick('testABC')">Click me!</a></b-button></p>
      <p><b-button><a @click="handleClick('testABC')">Click me shorty</a></b-button></p> <!--shorter syntax-->
      <p><b-button><a v-on:click="handleClick(selected)">who is selected friend?</a></b-button></p>
      <p><b-button><a @click="handleClickEvent($event)">Click me $event</a></b-button></p>
  </div>




  <h1>Watchers</h1>
  <p>My name is {{name}}</p>
  <p><b-button @click="changeName()">Change My name!</b-button></p>

  <h1>Computed Properties</h1>
  <p> {{ count }} </p>

  <hr>
  <h2 v-show="showElement">v-show. Only show the following if true</h2>
  <p v-show="showMe">Shown cuz im true</p>


  <h2>v-show as a div with v-if</h2>
    <div v-if="showElement">
    <ol>
      <li>Vishwas</li>
      <li>Codevolution</li>
      <li>Vue 3</li>
    </ol>
  </div>
  <hr>
  <h2>v-if/v-else on divs - conditionally rendered groups</h2>
    <div v-if="Math.random() > 0.5">
        Now you see me
      </div>
      <div v-else>
        Now you don't
      </div>
  <h2>v-if/v-else on template - conditionally rendered groups</h2>
      <template v-if="ok">
              <h1>Title</h1>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
      </template>
  <h2>v-else-if</h2>
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>
  <hr>
  <div>
  <h4>Filtered/Sorted Array...computed</h4>
  <li v-for="(n, index) in evenNumbers" :key="index">{{ n }}</li>
  </div>
  <hr>
  <!-- <div> Couldnt get this to work.
  <h4>Filtered/Sorted Array...method</h4>
  <ul v-for="(set, index) in sets" :key="index">
    <li v-for="n, index in even" :key="index">{{ n }}</li>
    </ul>
  </div> -->
  <div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>

<div id="example-2">
  <!-- `greet` is the name of a method defined below -->
  <button v-on:click="greet">Greet</button>
</div>

</div>


</template>



<script>
//bringing in external scripts
import heyScript from "@/components/hey.js";
import HolaMundo from "@/components/HolaMundo.vue";
import Vue from "vue";



export default {
  data () {
    return {
      name: 'Stuart',
      greeting: 'Basic greeting',
      greetingAlt: 'greeting  alt',
      showMe: true,
      selected: "",
       eatSubList: [],
      todos: [
        { id: 1, title: 'Do something' },
        { id: 2, title: 'Do something else' }
      ],
      items: [1, 2, 3],
      showElement: true,
      ok: true,
      type: 'B',
      numbers: [ 1, 2, 3, 4, 5 ],
      // sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
      counter: 0

    }
  },
  computed: {
    count: function() {
        return 'The count is ' + this.items.length * 10
    },
    evenNumbers () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    // even(numbers) {
    //     return numbers.filter(function (number) {
    //       return number % 2 === 0
    //     })
    //   },
  },
  methods: {
    handleClick: function(value) {
      alert(value)
    },
    handleClickEvent: function(event) {
      console.log(event)
    },
    changeName: function() {
      this.name = 'Wizard X'
    },
    onButtonClick(evt) {
      const button = evt.target;  // <-- EVT TARGET.
      console.log(`The user clicked ${button.name}: ${button.value}`);
    },
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
  watch: {
    // name: function() {
    //   console.log(this.name)
    //   },
    name: function(newValue, oldValue) {
      alert('change occured to the prop');
      console.log("New Value :" + newValue + " Old Value: " + oldValue)
      console.log(`New value ${newValue}, Old Value ${oldValue}.`)
      },
  },
  components: {
    HolaMundo
  }
};

</script>

<style scoped>
p {
  /*font-size: 2em;*/
  font-style: italic;
  text-align: center;
}


</style>