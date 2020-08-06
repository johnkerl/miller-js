<template>
  <div id="app">
    <img width="100" height="100" alt="Miller logo" src="./assets/mlr-logo.png" />
    <h1>This is miller.js v0</h1>
    <p> Mapping from {{this.inputFormat}} to {{this.outputFormat}}</p>
    <MJSFileUploader msg="Input-file stub" />
    <MJSFormatSelector
      msg="Input format"
      :defaultFormat = "getInputFormat()"
      v-on:selectedFormat="setInputFormat"
    />
    <MJSVerbSelector msg="Verb-selector stub" />
    <MJSFormatSelector
      msg="Output format"
      :defaultFormat = "getOutputFormat()"
      v-on:selectedFormat="setOutputFormat"
    />
    <MJSOutputDisplayer msg="Output-data stub" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MJSVerbSelector from "./components/MJSVerbSelector.vue";
import MJSFileUploader from "./components/MJSFileUploader.vue";
import MJSFormatSelector from "./components/MJSFormatSelector.vue";
import MJSOutputDisplayer from "./components/MJSOutputDisplayer.vue";
import {FileFormat} from "./types/MJSTypes";

@Component({
  components: {
    MJSVerbSelector,
    MJSFileUploader,
    MJSFormatSelector,
    MJSOutputDisplayer,
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
