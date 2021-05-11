<template>
    <div class="buttons">
      <!--4.counter method click handlers -->
        <!-- <b-button @click="decreaseCounter" variant="success">-</b-button>
        <b-button @click="increaseCounter" variant="success">+</b-button> -->
      <!--8.[mawd] update button click handlers to commit to state mutations. -->
        <!-- <b-button @click="$store.commit('decreaseCounter')" variant="success">-</b-button> -->
        <!-- <b-button @click="$store.commit('increaseCounter')" variant="success">+</b-button> -->
      <!--10.[mawd] Dispatch TestDispatch method instead of commit method. Test, will console.log if it hits action. (actions) . -->
      <!--12.[mawd] DISPATCH TO ACTION-->
      <!--15.1[mawd] moved this to a child component -->
      <b-button @click="$store.dispatch('increaseCounter')" variant="success">+</b-button>
      <b-button @click="$store.dispatch('decreaseCounter')" variant="success">-</b-button>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>