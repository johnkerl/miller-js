<template>
  <div id="app">
    <!--
    <img alt="Miller logo" src="./assets/mlr-logo.png" />
    -->
    <h1>This is miller.js v0</h1>
    <p> Mapping from {{this.inputFormat}} to {{this.outputFormat}}</p>
    <MJSFileUploader msg="File uploader goes here" />
    <MJSFormatSelector
      msg="Input format"
      :defaultFormat = "getInputFormat()"
      v-on:selectedFormat="setInputFormat"
    />
    <HelloWorld msg="Verb-selector goes here" />
    <MJSFormatSelector
      msg="Output format"
      :defaultFormat = "getOutputFormat()"
      v-on:selectedFormat="setOutputFormat"
    />
    <HelloWorld msg="Output-displayer goes here" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import MJSFileUploader from "./components/MJSFileUploader.vue";
import MJSFormatSelector from "./components/MJSFormatSelector.vue";
import {FileFormat} from "./types/MJSTypes";

@Component({
  components: {
    HelloWorld,
    MJSFileUploader,
    MJSFormatSelector,
  }
})
export default class App extends Vue {
  // xxx get the defaults into the selector objects somehow ... maybe a prop ...
  private inputFormat = FileFormat.CSV;
  private outputFormat = FileFormat.JSON;
  private getInputFormat() {
    return this.inputFormat;
  }
  private getOutputFormat() {
    return this.outputFormat;
  }
  private setInputFormat(newFormat: {name: FileFormat}) {
    this.inputFormat = newFormat.name;
  }
  private setOutputFormat(newFormat: {name: FileFormat}) {
    this.outputFormat = newFormat.name;
  }
}
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
