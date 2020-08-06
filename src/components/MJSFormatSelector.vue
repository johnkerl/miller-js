<template>
  <div class="mjs-format-selector">
    {{ msg }}
    <dropdown
      :options="arrayOfObjects"
      :selected='{name:"A"}'
      v-on:updateOption="methodToRunOnSelect" 
      :placeholder="'Select an Item'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import dropdown from "vue-dropdowns";

@Component({
  components: {
    dropdown: dropdown,
  },
})

export default class MJSFormatSelector extends Vue {
  @Prop() private msg!: string;
  public constructor() {
    super();
  }

  private arrayOfObjects: Array<{name: string}> = [{name:"A"}, {name:"B"}, {name:"C"}];
  @Emit('selectedFormat')
  methodToRunOnSelect(newSelected: {name: string}) {
    // No need to retain here in class state since emitted to parent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mjs-format-selector {
  margin: 5px;
  border: 1px solid #aaaaaa;
  padding: 5px;
}
</style>
