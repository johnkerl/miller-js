<!-- https://www.npmjs.com/package/vue-filereader -->
<template>
  <div class="mjs-file-uploader">
    {{ msg }}
    <input
      type="file"
      multiple
      :name="uploadFieldName"
      :disabled="isSaving"
      @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {FileFormat} from "../types/MJSTypes";

@Component({
  components: {
  },
})
export default class MJSFileUploader extends Vue {
  @Prop() private msg!: string;

  private myFunction(x: string) {
    console.log(x);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mjs-file-uploader {
  margin: 5px;
  border: 1px solid #aaaaaa;
  padding: 5px;
  width: 400px;
}
</style>
