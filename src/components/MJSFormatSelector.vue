<template>
  <div class="mjs-format-selector">
    {{ msg }}
    <dropdown>
      :options="arrayOfObjects"
      :selected="A"
    </dropdown>
  </div>
</template>

<!--
<dropdown :options="arrayOfObjects" 
          :selected="object" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean">
</dropdown>
-->

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import dropdown from 'vue-dropdowns';

// https://github.com/mikerodham/vue-dropdowns
// https://blog.logrocket.com/how-to-write-a-vue-js-app-completely-in-typescript/
// https://www.sitepoint.com/class-based-vue-js-typescript/
@Component({
  components: {
    'dropdown': dropdown,
  },

//  props: {
//    defaultFormat: {
//      type: String xxx enum,
//      required: true
//    }
//  },

//   methods: {
//     methodToRunOnSelect(payload) {
//       this.object = payload;
//     }
//   }
})

export default class MJSFormatSelector extends Vue {
  @Prop() private msg!: string;

   //arrayOfObjects: ['A', 'B', 'C'];
   //object string: 'A';
   //methodToRunOnSelect(payload) {
     //this.object = payload;
   //}

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
