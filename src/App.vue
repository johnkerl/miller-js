<template>
  <div id="app">
    <!--
    <img alt="Miller logo" src="./assets/mlr-logo.png" />
    -->
    <h1>This is miller.js v0</h1>
    <MJSFileUploader msg="File uploader goes here" />
    <MJSFormatSelector msg="Input-format selector goes here" />
    <HelloWorld msg="Verb-selector goes here" />
    <MJSFormatSelector msg="Output-format selector goes here" />
    <HelloWorld msg="Output-displayer goes here" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import MJSFileUploader from "./components/MJSFileUploader.vue";
import MJSFormatSelector from "./components/MJSFormatSelector.vue";

@Component({
  components: {
    HelloWorld,
    MJSFileUploader,
    MJSFormatSelector,
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin: 10px;
}
h1 {
  color: maroon;
}
</style>
