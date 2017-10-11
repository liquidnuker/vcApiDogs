<template>
<div>
  <ul v-for="i in lastViewed">
    <li>
      {{ i.name }} {{ i.breed }}
      <!-- {{ i.imgSrc }} -->
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