<template>
<div>
  <form>
    <span>
      <p>Choose Breeds:</p>
    </span>
    <!-- vendor/select-css.scss -->
    <div class="custom-select1_01">
     <select v-model="prSelected">
        <option v-for="i in options">{{ i }}</option>
      </select>
    </div>
  </form>
</div>
</template>
<script>
import {allbreeds} from "../js/allbreeds.js";
import {router} from "../js/router.js";
export default {
  data () {
    return {   
      // selected: store.currentCategory,
      options: allbreeds.sort()
    }
  },
  props: [
    "prSelected"
  ],
  mounted: function () {
    
  },
  methods: {   
    switchCategory: function(category) {
      // router.push(category);
    }     
  }
}
</script>