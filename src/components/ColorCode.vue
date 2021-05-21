<template>
     <!--14.4[mawd] vuex gets complicated with text fields and 2 way binding, so danny covers it here-->
    <div>
    <!--14.5 the following works, but we're not supposed to do it this way. not supposed to two-way bind
             with properties in our state
    <input v-model="$store.state.colorCode" placeholder="Enter color code" type="text"> -->
    <!--14.6 Use instead  computed property with a get and set method. get to grab value from state property
        a set method for committing a mutation that will update the state property -->
    <!--15.1[mawd] moved this to a child component -->
    <input v-model="colorCode" placeholder="Enter color code" type="text">
    </div>
    <!--End Counter -->
</template>

<script>
    export default {
        computed: {
            colorCode: {
            get() { //14.7[mawd] get colorCode property from state
                console.log(`at get() : ${this.$store.state.counter.colorCode}`)
                return this.$store.state.counter.colorCode
            },
            set(newValue) { //14.8[mawd] send a new value to state mutation as a payload.
                console.log('you are setting the input field');
                console.log(newValue); // new value logged every character
                //14.9[mawd] commit to  mutation. p1: mutation name. p2: the payload.
                //This direct commit to mutation. Better practice is to instead dispatch to action we'll see later.
                // this.$store.commit('setColorCode', newValue);
                //14.12[mawd] dispatch to action instead.
                this.$store.dispatch('counter/setColorCode', newValue);
            }
            }
  },

    }
</script>

<style scoped>

</style>