<template>
  <div style="background-color: lightGreen;">
    <p>PARENT COMPONENT</p>
    <ChildComponent>
      <p>p HTML element injected content from the parent component.</p>
      <p>
        We can bind to the data() props in the parent's scope: {{ myVariable }}
      </p>
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from "../components/ChildComponent.vue";

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      myVariable: `Parent Variable`
    };
  }
};
</script>
