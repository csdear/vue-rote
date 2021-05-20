<template>
    <!--COUNTER-->
    <!--MAWD vuex tutorial-->
    <!--1.[mawd] create a counter and buttons-->
    <!--2,[mawd] refactored to bring in counter data prop <div class="counter">0</div> -->
    <!--6.[mawd] <div class="counter">{{ counter }}</div> Now, we are accessing counter directly from state -->
    <!-- <div class="counter">{{ $store.state.counter }}</div> -->
    <!--14.3[mawd] dynamically bind state colorCode to the style attribute -->
    <!--15.1[mawd] moved this to a child component -->
    <div :style="{ color: $store.state.counter.colorCode }" colorclass="counter">{{ $store.state.counter.counter }}</div>
</template>

<script>

    export default {

    }
</script>

<style scoped>

</style>