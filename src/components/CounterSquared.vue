<template>
    <!--13.1[mawd] GETTER to square value from state.-->
    <div class="counter-squared" :style="{ color: $store.state.counter.colorCode }">
      {{ $store.state.counter.counter }}
      <sup>2</sup> =
      <!-- xxx -->
      <!--13.3[mawd] Call our getter-->
      <!--15.1[mawd] moved this to a child component -->
      <!-- {{ $store.counter.getters.counterSquared }} -->
      {{ counterSquared }}
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import {mapGetters} from 'vuex';
import Vuex from "vuex"; // the getter required vuex, so had to bring it in here.

 export default {
        // data() {
        //     return {
        //         counterSquared: $store.counter.getters.counterSquared
        //     }
        // },
        // computed: mapGetters(["counterSquared"]),
            // computed: {
            //     ...mapGetters(["counterSquared"])
            // },
        // computed: {
        //     getCounterSquared() {
        //          console.log('hit getCounteredSquared');
        //          // return this.$store.state.counterSquared();
        //          // this.$store.getters['counter/counterSquared']
        //     }
        // },

        // 1.[ugcs] unknown getter counterSquared (ugcs) issue.
        // computed: {
        //     ...mapGetters(['counter', ['counterSquared']])
        // },


        //2.[ugcs] format used in inputform will work.
        // computed: Vuex.mapGetters({
        //     counterSquared: 'counter/counterSquared'
        // }),

        //3,[ugcs] or format used when mapGetters import is destructured.
        computed: {
            ...mapGetters({counterSquared: 'counter/counterSquared'})
        },


        // methods: {
        //     getCounterSquared() {
        //         this.counterSquared = this.$store.getters['counter/counterSquared']();
        //     }
        // },
    }
</script>

<style scoped>

</style>