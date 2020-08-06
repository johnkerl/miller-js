<template>
  <div class="mjs-file-uploader">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MJSFileUploader extends Vue {
  @Prop() private msg!: string;
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
