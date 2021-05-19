<template>
    <!--13.1[mawd] GETTER to square value from state.-->
    <div class="counter-squared">
      {{ $store.state.counter }}
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

 export default {
        // data() {
        //     return {
        //         counterSquared: ''
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

        computed: {
            ...mapGetters(['counterSquared'])
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