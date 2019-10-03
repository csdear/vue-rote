<!--SINGLE FILE COMPONENT -->
<template>
<div class="blah">

  <!-- A. basic interpolation, populated by this data obj -->
  <h1>{{ greeting }} World!</h1>
  
  <!-- B. v-text alternative to interpolation, pop by this data obj.-->
  <HolaMundo v-text="greetingAlt" />
  
  <!-- Passing a prop to HolaMundo subcompt. -->
  <HolaMundo msg="Welcome" />
  <br>
  
  <h2>v-model directive</h2>
  <input v-model="name" placeholder="Your name">
  <p> Welcome to the party {{ name }}</p><br>
  <!--expression-->
  <p><span v-text="'So glad to have you, ' + name + ', with us today!'"> </span></p>

  <p> Whats does wikipedia says about 
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

</div>
</template>



<script>
//bringing in external scripts
import heyScript from "@/components/hey.js";

import HolaMundo from "@/components/HolaMundo.vue";

export default {
  data () {
    return {
      greeting: 'Basic interpolation',
      greetingAlt: 'v text directive',
      name: "",
      selected: "",
       eatSubList: [],
    }
  },
  components: {
    HolaMundo
  }
};

</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>