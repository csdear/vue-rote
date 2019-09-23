<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--JS global object access-->
    <h2>{{ Math.sqrt(16) * Math.random() }}</h2>
    <h2>{{ Date() }}</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <p style="text-decoration: underline">Test inline style</p>
    <p>Pellentesque suscipit maximus purus, in aliquet nibh mollis vel. <span style="text-decoration: underline">Nulla dictum posuere varius.</span> Nullam condimentum <br> risus sit amet elit commodo congue. Duis sit amet diam orci. Integer nec aliquam libero.</P> 
    <!-- Xor. Styling Vue components -->
    <p :style="{'color': textColor}">v-bind style example to data compt object</p>
    <p :style="mystyle">v-bind style example to a computed property</p>
    <p class="imRed">By class identifier</p>
    <p :class="{underline: isUnderlined}">Dynamic based on data() if prop is true, will apply css class.</p>
    <p :class="ogreClass"> Directly bind a string, and that will reference a data property</p>
    <p :class="[ogreClass, ogreBold]"> Reference multiple CSS classes</p>
    <p :class="{underline: isUnderlined, bold: isBold}"> Reference multiple CSS classes using an object inlined in the class binding</p>
    <p :class="[textDecoration, {bold: isBold}]"> Hybrd, object inlined and an Array</p>
    <p :class="paragraphClasses">Computed, multiple</p><!--xor9-->
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
          target="_blank"
          rel="noopener"
          >unit-jest</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      textColor: 'blue',
      textDecoration: 'underline',
      textWeight: 'bold',
      isUnderlined: true,
      isBold: true,
      ogreClass: 'ogreClass',
      ogreBold: 'ogreBold',
    }
  },
  props: {
    msg: String
  },
  computed: {
    mystyle: function() {
      return {
        textDecoration: this.textDecoration,
        textWeight: this.textWeight, 
      }
    },
    paragraphClasses: function() {
      return {
        underlined: this.isUnderlined,
        bold: this.isBold,
        ogreClass: this.ogreClass,
    }
  }
  }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.ogreClass { 
  color: green; 
}

.ogreBold { 
  font-weight: bold; 
}

.underline { 
  text-decoration: underline; 
}

.bold { 
  font-weight: bold; 
}

.imRed { 
  color: red; 
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
