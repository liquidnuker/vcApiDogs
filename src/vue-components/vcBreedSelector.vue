<template>
<div>
  <form>
    <span>
      <p>Choose Breeds:</p>
    </span>
    <select class="breed-selector" @change="switchBreed($event.target.value)" v-model="prSelected">
      <option v-for="i in options" :value="i">{{ i }}</option>
    </select>
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
    switchBreed: function(breed) {
      router.push({path: "/gallery/" + breed});
    }     
  }
}
</script>