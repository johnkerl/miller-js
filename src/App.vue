<template>
  <div id="app">
    <!--
    <img alt="Miller logo" src="./assets/mlr-logo.png" />
    -->
    <h1>This is miller.js v0</h1>
    <HelloWorld msg="File uploder goes here" />
    <HelloWorld msg="Input-format selector goes here" />
    <HelloWorld msg="Verb-selector goes here" />
    <HelloWorld msg="Output-format selector goes here" />
    <HelloWorld msg="Output-displayer goes here" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
