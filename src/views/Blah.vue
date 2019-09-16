<!--SINGLE FILE COMPONENT -->
<template>
<div class="blah">
  <h1>{{ greeting }} World!</h1>
</div>
</template>

 

<script>
//bringing in external scripts
import heyScript from "@/components/hey.js";

export default {
  data () {
    return {
      greeting: 'Hello Friend BLAH'
    }
  }
};

</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>