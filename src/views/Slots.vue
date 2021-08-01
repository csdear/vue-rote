<template>
  <div style="background-color: lightGreen;">
    <p>PARENT COMPONENT</p>
    <ChildComponent>
      <p>p HTML element injected content from the parent component.</p>
      <p>
        We can bind to the data() props in the parent's scope: {{ myVariable }}
      </p>
    </ChildComponent>

    <div class="container">  
        <BoxComponent> <!--child component instatiated in the parent. named slots image and content. -->
                        <img slot="image" :src="imgUrl" alt="Image">
                        <p slot="content">
                          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                          <br> This is the first box component content.
                        </p>
        </BoxComponent>
        
        <BoxComponent>
                        <img slot="image" src="http://via.placeholder.com/128x128/00D1B2/ffffff" alt="Image">
                        <p slot="content">
                          <strong>Maggie Smith</strong> <small>@maggiesmith</small> <small>30m</small>
                          <br> This is the second box component content.
                        </p>
        </BoxComponent>
    </div>
    <!-- digital ocean. updated v-slot syntax. just slot="SLOT_NAME" is deprecated.<style scoped>
         Slots are a good way to enforce HTML5 structure. Great for a11y. -->
    <div class="container">
          <CoreComponent>
            <template v-slot:main>
              <p>MAIN: Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail in both larval and adult forms.</p>
              <p>Several species of salamander inhabit the temperate rainforest of the Pacific Northwest, including the Ensatina, the Northwestern Salamander and the Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects, worms and other small creatures.</p>
            </template>
            <template v-slot:aside>
              <p>ASIDE: The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
            </template>
          </CoreComponent>
    </div>
  </div>
</template>

<script>
import ChildComponent from "../components/ChildComponent.vue";
import BoxComponent from "../components/BoxComponent.vue";
import CoreComponent from "../components/CoreComponent.vue";

export default {
  components: {
    ChildComponent,
    BoxComponent,
    CoreComponent,
  },
  data() {
    return {
      myVariable: `Parent Variable`,
      imgUrl : 'http://via.placeholder.com/256x256/005dab/ffffff',
    };
  }
};
</script>

<style scoped>

</style>
