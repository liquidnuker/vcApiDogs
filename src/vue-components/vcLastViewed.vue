<template>
<div>
  <ul v-for="i in lastViewed">
    <li>
      {{ i }}
    </li>
  </ul>
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data () {
    return {   
      lastViewed: store.lastViewed
    }
  },
  watch: {
  // : function () {
  // }
  },
  props: [
    "prName1"
  ],
  components: {
  },
  mounted: function () {
    
  },
  methods: {        
  }
}
</script>