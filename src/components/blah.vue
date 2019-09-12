<template>
  <p>{{ greeting }} World!</p>
</template>

 

<script>
//bringing in external scripts
import heyScript from "@/components/hey.js";

module.exports = {
  data: function () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>